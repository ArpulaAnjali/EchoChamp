// Check if user is logged in
const token = localStorage.getItem('token');
if (!token) {
    window.location.href = 'login.html';
}

// Load user profile data from localStorage
const userName = localStorage.getItem('userName') || 'User';
const userEmail = localStorage.getItem('userEmail') || 'user@example.com';
const userPoints = localStorage.getItem('userPoints') || 0;

document.getElementById("name").innerText = userName;
document.getElementById("email").innerText = userEmail;
document.getElementById("points").innerText = userPoints;