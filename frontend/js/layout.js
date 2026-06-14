function renderSharedHeader() {
    const token = localStorage.getItem('token');
    const userName = localStorage.getItem('userName') || 'User';
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // On home page, always show Login/Register buttons
    const authButtons = (token && currentPage !== 'index.html')
        ? `<span class="text-white me-3">Hi, ${userName}</span><button id="sharedLogoutButton" class="btn btn-outline-light btn-sm">Logout</button>`
        : `
            <a href="index.html" class="btn btn-light btn-sm me-2">Home</a>
            <a href="login.html" class="btn btn-light btn-sm me-2">Login</a>
            <a href="register.html" class="btn btn-warning btn-sm">Register</a>
          `;

    const headerHtml = `
        <header class="shared-header bg-success text-white shadow-sm">
            <div class="container-fluid d-flex flex-column flex-md-row align-items-center justify-content-between py-3">
                <div class="d-flex align-items-center gap-3">
                    <a class="navbar-brand text-white fw-bold mb-0" href="index.html">🌱 EcoChamp</a>
                </div>
                <div class="d-flex align-items-center gap-2">${authButtons}</div>
            </div>
        </header>
    `;

    const headerRoot = document.getElementById('sharedHeader');
    if (headerRoot) {
        headerRoot.innerHTML = headerHtml;
        const logoutButton = document.getElementById('sharedLogoutButton');
        if (logoutButton) {
            logoutButton.addEventListener('click', () => {
                localStorage.clear();
                window.location.href = 'login.html';
            });
        }
    }
}

function renderSharedFooter() {
    const year = new Date().getFullYear();
    const footerHtml = `
        <footer class="shared-footer bg-light border-top">
            <div class="container-fluid py-3 d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
                <div class="text-muted">© ${year} EcoChamp. Learn, act, and protect the planet.</div>
                <div class="d-flex flex-wrap gap-3 align-items-center">
                    <a href="dashboard.html" class="text-success text-decoration-none">Home</a>
                    <a href="profile.html" class="text-success text-decoration-none">Profile</a>
                    <a href="lessons.html" class="text-success text-decoration-none">Modules</a>
                    <a href="challenges.html" class="text-success text-decoration-none">Challenges</a>
                </div>
            </div>
        </footer>
    `;

    const footerRoot = document.getElementById('sharedFooter');
    if (footerRoot) {
        footerRoot.innerHTML = footerHtml;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderSharedHeader();
    renderSharedFooter();
});
