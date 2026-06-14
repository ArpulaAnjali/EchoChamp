import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;
const PUBLIC_DIR = path.join(__dirname, 'frontend');

const MIME_TYPES = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
    let rawUrl = req.url.split('?')[0];
    let filePath = path.join(PUBLIC_DIR, rawUrl === '/' ? 'pages/index.html' : rawUrl);
    
    // Security check to prevent directory traversal
    if (!filePath.startsWith(PUBLIC_DIR)) {
        res.statusCode = 403;
        res.end('Forbidden');
        return;
    }

    fs.stat(filePath, (err, stats) => {
        if (err) {
            // Check if it exists inside pages folder as fallback
            const pageFilePath = path.join(PUBLIC_DIR, 'pages', rawUrl);
            fs.stat(pageFilePath, (err2, stats2) => {
                if (err2) {
                    res.statusCode = 404;
                    res.end('Not Found');
                    return;
                }
                
                fs.readFile(pageFilePath, (err3, data) => {
                    if (err3) {
                        res.statusCode = 404;
                        res.end('Not Found');
                        return;
                    }
                    const ext = path.extname(pageFilePath).toLowerCase();
                    res.setHeader('Content-Type', MIME_TYPES[ext] || 'application/octet-stream');
                    res.end(data);
                });
            });
            return;
        }

        if (stats.isDirectory()) {
            filePath = path.join(filePath, 'index.html');
        }

        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.statusCode = 404;
                res.end('Not Found');
                return;
            }

            const ext = path.extname(filePath).toLowerCase();
            res.setHeader('Content-Type', MIME_TYPES[ext] || 'application/octet-stream');
            res.end(data);
        });
    });
});

server.listen(PORT, () => {
    console.log(`Frontend server running at http://localhost:${PORT}`);
});
