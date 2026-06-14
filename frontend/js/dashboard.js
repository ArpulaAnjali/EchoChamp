// Check if user is logged in
const token = localStorage.getItem('token');
if (!token) {
    window.location.href = 'login.html';
}

// Get current user info
const currentUserId = localStorage.getItem('userId');
const currentUserName = localStorage.getItem('userName');

// Load user dashboard data from localStorage - use user-specific keys
const userPoints = parseInt(localStorage.getItem(`userPoints_${currentUserId}`)) || parseInt(localStorage.getItem('userPoints')) || 0;
const userBadges = parseInt(localStorage.getItem('userBadges')) || 0;
const userChallenges = parseInt(localStorage.getItem('userChallenges')) || 0;
const userActivities = parseInt(localStorage.getItem('userActivities')) || 0;

// Update dashboard with current user's data
document.getElementById("points").innerText = userPoints;
document.getElementById("badges").innerText = userBadges;
document.getElementById("challenges").innerText = userChallenges;
document.getElementById("activities").innerText = userActivities;

// Display rewards progress
function displayRewardsProgress() {
    const stats = getUserStats();
    const currentTier = getCurrentRewardTier();
    const nextReward = getNextReward();
    const progress = getRewardProgress();
    
    const container = document.getElementById('rewardProgressContainer');
    
    if (currentTier) {
        container.innerHTML = `
            <div style="text-align: center;">
                <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">${currentTier.icon}</div>
                <h6 style="font-weight: 600;">${currentTier.name}</h6>
                <p style="color: #666; font-size: 0.85rem;">You have earned ${currentTier.points} points</p>
                <hr style="margin: 1rem 0;">
            </div>
        `;
    }
    
    // Next reward progress
    const pointsToNext = getPointsToNextReward();
    container.innerHTML += `
        <div>
            <p style="font-size: 0.85rem; color: #666; margin-bottom: 0.5rem;">
                Next: ${nextReward.name} <strong>${pointsToNext} points to go</strong>
            </p>
            <div class="progress" style="height: 25px; border-radius: 12px; background: #e8f5e9;">
                <div class="progress-bar" style="width: ${progress}%; background: linear-gradient(90deg, #4CAF50, #2196F3); border-radius: 12px; transition: width 0.3s;" role="progressbar"></div>
            </div>
            <p style="font-size: 0.75rem; color: #999; margin-top: 0.5rem; text-align: right;">${Math.round(progress)}%</p>
        </div>
    `;
}

// Display achievements
function displayAchievements() {
    const achievements = JSON.parse(localStorage.getItem('achievements')) || [];
    const container = document.getElementById('achievementsContainer');
    
    if (achievements.length === 0) {
        container.innerHTML = '<p class="text-muted">Complete activities to unlock achievements</p>';
        return;
    }
    
    container.innerHTML = achievements.map(achievement => `
        <div style="display: inline-flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem; margin-right: 1rem;">
            <span style="font-size: 1.5rem;">${achievement.icon}</span>
            <div>
                <p style="margin: 0; font-size: 0.85rem; font-weight: 500;">${achievement.name}</p>
                <p style="margin: 0; font-size: 0.75rem; color: #999;">Unlocked on ${achievement.unlockedAt}</p>
            </div>
        </div>
    `).join('');
}

// Display unlocked rewards
function displayUnlockedRewards() {
    const unlockedRewards = JSON.parse(localStorage.getItem('unlockedRewards')) || [];
    const container = document.getElementById('unlockedRewardsContainer');
    
    if (unlockedRewards.length === 0) {
        container.innerHTML = '<p class="text-muted col-12">Complete more activities to unlock rewards!</p>';
        return;
    }
    
    container.innerHTML = unlockedRewards.map(reward => `
        <div class="col-md-4">
            <div class="card h-100" style="text-align: center; padding: 1.5rem; border: 2px solid ${reward.color}; background: linear-gradient(135deg, ${reward.color}15 0%, transparent 100%);">
                <div style="font-size: 3rem; margin-bottom: 0.5rem;">${reward.icon}</div>
                <h6 style="font-weight: 600; color: #146c43; margin-bottom: 0.5rem;">${reward.name}</h6>
                <p style="font-size: 0.8rem; color: #666; margin: 0;">${reward.description}</p>
                <p style="font-size: 0.75rem; color: #999; margin-top: 0.5rem;">Unlocked: ${reward.unlockedAt}</p>
            </div>
        </div>
    `).join('');
}

// Initialize and display all reward-related information
function initializeDashboardRewards() {
    displayRewardsProgress();
    displayAchievements();
    displayUnlockedRewards();
}

// Call on page load
initializeDashboardRewards();