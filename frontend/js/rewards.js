// Rewards System
const REWARD_TIERS = [
    { points: 100, name: 'Bronze Eco-Warrior', icon: '🥉', color: '#CD7F32', description: 'Reached 100 Eco Points' },
    { points: 250, name: 'Silver Eco-Protector', icon: '🥈', color: '#C0C0C0', description: 'Reached 250 Eco Points' },
    { points: 500, name: 'Gold Green-Champion', icon: '🥇', color: '#FFD700', description: 'Reached 500 Eco Points' },
    { points: 1000, name: 'Platinum Sustainability-Leader', icon: '💎', color: '#E5E4E2', description: 'Reached 1000 Eco Points' },
    { points: 2000, name: 'Diamond Planet-Guardian', icon: '👑', color: '#00D9FF', description: 'Reached 2000 Eco Points' },
    { points: 5000, name: 'Legendary Earth-Savior', icon: '⭐', color: '#FFD700', description: 'Reached 5000 Eco Points' }
];

const ACHIEVEMENT_BADGES = [
    { id: 'first_quiz', name: 'Quiz Starter', icon: '📝', condition: 'Complete first quiz' },
    { id: 'level_5_complete', name: 'Level Master', icon: '🎯', condition: 'Complete 5 different levels' },
    { id: 'perfect_score', name: 'Perfect Run', icon: '⚡', condition: 'Get 10/10 in a quiz' },
    { id: 'activity_master', name: 'Activity Expert', icon: '🌍', condition: 'Complete 5 activities' },
    { id: 'challenge_hero', name: 'Challenge Winner', icon: '🏆', condition: 'Complete 3 challenges' },
    { id: 'streak_7', name: 'Consistent Guardian', icon: '🔥', condition: 'Play 7 days in a row' }
];

// Initialize rewards system
function initRewardsSystem() {
    const userPoints = parseInt(localStorage.getItem('userPoints')) || 0;
    const unlockedRewards = JSON.parse(localStorage.getItem('unlockedRewards')) || [];
    const achievements = JSON.parse(localStorage.getItem('achievements')) || [];
    
    return {
        currentPoints: userPoints,
        unlockedRewards: unlockedRewards,
        achievements: achievements
    };
}

// Add points and check for rewards
function addEcoPoints(points, source = 'quiz') {
    const userId = localStorage.getItem('userId');
    
    // Get points for current user
    let currentPoints = 0;
    
    if (userId) {
        // User-specific storage
        const userPointsKey = `userPoints_${userId}`;
        currentPoints = parseInt(localStorage.getItem(userPointsKey)) || 0;
        currentPoints += points;
        localStorage.setItem(userPointsKey, currentPoints);
    }
    
    // Also update global userPoints for backward compatibility
    let globalPoints = parseInt(localStorage.getItem('userPoints')) || 0;
    globalPoints += points;
    localStorage.setItem('userPoints', globalPoints);
    
    checkForRewards(currentPoints);
    logActivity(source, points);
    
    return currentPoints;
}

// Check if user unlocked any rewards
function checkForRewards(totalPoints) {
    const unlockedRewards = JSON.parse(localStorage.getItem('unlockedRewards')) || [];
    
    REWARD_TIERS.forEach(tier => {
        if (totalPoints >= tier.points && !unlockedRewards.some(r => r.name === tier.name)) {
            unlockReward(tier);
        }
    });
}

// Unlock a reward
function unlockReward(reward) {
    const unlockedRewards = JSON.parse(localStorage.getItem('unlockedRewards')) || [];
    unlockedRewards.push({
        ...reward,
        unlockedAt: new Date().toLocaleDateString()
    });
    localStorage.setItem('unlockedRewards', JSON.stringify(unlockedRewards));
    
    // Show notification
    showRewardNotification(reward);
}

// Show reward notification
function showRewardNotification(reward) {
    const notification = document.createElement('div');
    notification.className = 'reward-notification';
    notification.innerHTML = `
        <div class="reward-content">
            <div class="reward-icon" style="font-size: 3rem;">${reward.icon}</div>
            <h3>🎉 New Reward Unlocked!</h3>
            <h4>${reward.name}</h4>
            <p>${reward.description}</p>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Trigger animation
    setTimeout(() => notification.classList.add('show'), 10);
    
    // Remove after 4 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

// Check and unlock achievement
function unlockAchievement(achievementId) {
    const achievements = JSON.parse(localStorage.getItem('achievements')) || [];
    
    if (!achievements.find(a => a.id === achievementId)) {
        const achievement = ACHIEVEMENT_BADGES.find(a => a.id === achievementId);
        if (achievement) {
            achievements.push({
                ...achievement,
                unlockedAt: new Date().toLocaleDateString()
            });
            localStorage.setItem('achievements', JSON.stringify(achievements));
            showAchievementNotification(achievement);
        }
    }
}

// Show achievement notification
function showAchievementNotification(achievement) {
    const notification = document.createElement('div');
    notification.className = 'achievement-notification';
    notification.innerHTML = `
        <div class="achievement-content">
            <div class="achievement-icon">${achievement.icon}</div>
            <h4>${achievement.name}</h4>
            <p>${achievement.condition}</p>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => notification.classList.add('show'), 10);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Log activity for tracking
function logActivity(activityType, points) {
    const activities = JSON.parse(localStorage.getItem('activityLog')) || [];
    activities.push({
        type: activityType,
        points: points,
        timestamp: new Date().toISOString(),
        date: new Date().toLocaleDateString()
    });
    
    // Keep only last 100 activities
    if (activities.length > 100) {
        activities.shift();
    }
    
    localStorage.setItem('activityLog', JSON.stringify(activities));
}

// Get user stats for dashboard
function getUserStats() {
    const userId = localStorage.getItem('userId');
    const userPointsKey = userId ? `userPoints_${userId}` : 'userPoints';
    const totalPoints = parseInt(localStorage.getItem(userPointsKey)) || 0;
    
    const stats = {
        totalPoints: totalPoints,
        unlockedRewards: JSON.parse(localStorage.getItem('unlockedRewards')) || [],
        achievements: JSON.parse(localStorage.getItem('achievements')) || [],
        nextReward: getNextReward(),
        pointsToNextReward: getPointsToNextReward()
    };
    return stats;
}

// Get next reward milestone
function getNextReward() {
    const userId = localStorage.getItem('userId');
    const userPointsKey = userId ? `userPoints_${userId}` : 'userPoints';
    const currentPoints = parseInt(localStorage.getItem(userPointsKey)) || 0;
    const nextReward = REWARD_TIERS.find(tier => tier.points > currentPoints);
    return nextReward || REWARD_TIERS[REWARD_TIERS.length - 1];
}

// Get points needed for next reward
function getPointsToNextReward() {
    const userId = localStorage.getItem('userId');
    const userPointsKey = userId ? `userPoints_${userId}` : 'userPoints';
    const currentPoints = parseInt(localStorage.getItem(userPointsKey)) || 0;
    const nextReward = getNextReward();
    const pointsNeeded = nextReward.points - currentPoints;
    return Math.max(0, pointsNeeded);
}

// Get progress to next reward (0-100)
function getRewardProgress() {
    const userId = localStorage.getItem('userId');
    const userPointsKey = userId ? `userPoints_${userId}` : 'userPoints';
    const currentPoints = parseInt(localStorage.getItem(userPointsKey)) || 0;
    const currentReward = REWARD_TIERS.find(tier => currentPoints >= tier.points);
    const nextReward = getNextReward();
    
    if (!currentReward) {
        // Progress to first reward
        return (currentPoints / REWARD_TIERS[0].points) * 100;
    }
    
    if (currentReward.points === nextReward.points) {
        // Already at max
        return 100;
    }
    
    const pointsInSegment = currentPoints - currentReward.points;
    const segmentSize = nextReward.points - currentReward.points;
    return (pointsInSegment / segmentSize) * 100;
}

// Get current tier
function getCurrentRewardTier() {
    const userId = localStorage.getItem('userId');
    const userPointsKey = userId ? `userPoints_${userId}` : 'userPoints';
    const currentPoints = parseInt(localStorage.getItem(userPointsKey)) || 0;
    const currentTier = [...REWARD_TIERS].reverse().find(tier => currentPoints >= tier.points);
    return currentTier || null;
}

// Reset all data (for testing)
function resetRewardsData() {
    localStorage.removeItem('userPoints');
    localStorage.removeItem('unlockedRewards');
    localStorage.removeItem('achievements');
    localStorage.removeItem('activityLog');
}
