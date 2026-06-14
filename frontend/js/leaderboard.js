// Leaderboard System - Tracks user scores automatically

const LEADERBOARD_STORAGE_KEY = 'ecochamp-leaderboard';
const USERS_STORAGE_KEY = 'ecochamp-users';

let leaderboard = [];

// Get all registered users
function getAllUsers() {
    const users = JSON.parse(localStorage.getItem(USERS_STORAGE_KEY)) || [];
    return users;
}

// Get user stats for leaderboard
function getUserStats(userId) {
    // Get points from rewards system
    const userPointsKey = `userPoints_${userId}`;
    const userNameKey = `userName_${userId}`;
    const userStreakKey = `userStreak_${userId}`;
    
    const points = parseInt(localStorage.getItem(userPointsKey)) || 0;
    const name = localStorage.getItem(userNameKey) || 'Unknown User';
    const streak = parseInt(localStorage.getItem(userStreakKey)) || 0;
    
    // Get highest reward unlocked
    const unlockedRewardsKey = `unlockedRewards_${userId}`;
    const unlockedRewards = JSON.parse(localStorage.getItem(unlockedRewardsKey)) || [];
    const rewards = unlockedRewards.length > 0 ? unlockedRewards[unlockedRewards.length - 1].name : 'None';
    
    return {
        userId,
        name,
        points,
        streak,
        rewards
    };
}

// Build leaderboard from all users
function buildLeaderboard() {
    const users = getAllUsers();
    leaderboard = users.map(userId => getUserStats(userId))
        .filter(user => user.name !== 'Unknown User') // Remove users with no name
        .sort((a, b) => b.points - a.points || b.streak - a.streak);
    
    return leaderboard;
}

// Render leaderboard table
function renderLeaderboard() {
    buildLeaderboard();
    const tbody = document.getElementById('leaderboardBody');
    
    if (leaderboard.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="5" class="text-center text-muted py-4">
                    No users yet. Complete activities to appear on the leaderboard!
                </td>
            </tr>
        `;
        return;
    }
    
    tbody.innerHTML = leaderboard.map((user, index) => {
        const medal = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '';
        return `
            <tr>
                <td><strong>${index + 1} ${medal}</strong></td>
                <td>${user.name}</td>
                <td>${user.streak} days</td>
                <td><strong>${user.points}</strong> pts</td>
                <td>${user.rewards}</td>
            </tr>
        `;
    }).join('');
}

// Get current user info
function getCurrentUser() {
    const userId = localStorage.getItem('userId');
    const token = localStorage.getItem('token');
    
    if (!userId || !token) return null;
    
    return {
        userId,
        name: localStorage.getItem('userName') || 'Unknown User',
        points: parseInt(localStorage.getItem('userPoints')) || 0
    };
}

// Highlight current user row
function highlightCurrentUser() {
    const currentUser = getCurrentUser();
    if (!currentUser) return;
    
    const rows = document.querySelectorAll('#leaderboardBody tr');
    rows.forEach(row => {
        const nameCell = row.cells[1];
        if (nameCell && nameCell.textContent.trim() === currentUser.name) {
            row.style.backgroundColor = '#e8f5e9';
            row.style.fontWeight = 'bold';
        }
    });
}

// Display user rank
function displayUserRank() {
    const currentUser = getCurrentUser();
    if (!currentUser) return;
    
    const rank = leaderboard.findIndex(user => user.name === currentUser.name) + 1;
    const rankCard = document.getElementById('userRankCard');
    
    if (rankCard) {
        if (rank > 0) {
            const medal = rank === 1 ? '🥇' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : '';
            rankCard.innerHTML = `
                <div class="card shadow p-4 text-center" style="border-left: 4px solid #198754;">
                    <h5>Your Rank</h5>
                    <h2 style="color: #198754; margin: 0.5rem 0;">${medal} #${rank}</h2>
                    <p class="text-muted">${currentUser.points} Eco Points</p>
                </div>
            `;
        }
    }
}

// Initialize leaderboard
function initializeLeaderboard() {
    renderLeaderboard();
    highlightCurrentUser();
    displayUserRank();
}

// Initialize on page load
initializeLeaderboard();

// Refresh leaderboard every 5 seconds
setInterval(() => {
    initializeLeaderboard();
}, 5000);
