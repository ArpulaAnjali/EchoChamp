const challenges = [
    {
        id: "plant-tree",
        title: "Plant a Tree",
        points: 50,
        description: "Plant a tree in your community, school, or garden to help capture carbon, provide shade, and support local wildlife.",
        instructions: "Choose a good location, care for the seedling, and take a photo when it is planted. Then describe what you learned about the benefits of trees and how planting one can help the environment."
    },
    {
        id: "save-water",
        title: "Save Water",
        points: 40,
        description: "Complete a water-saving task at home by fixing a leak, using a water-saving showerhead, or collecting rainwater for plants.",
        instructions: "Record your activity with a photo and explain what you learned about conserving water and why it matters for the planet."
    },
    {
        id: "reduce-plastic-usage",
        title: "Reduce Plastic Usage",
        points: 40,
        description: "Avoid single-use plastics for a full day by using reusable bottles, bags, and containers instead.",
        instructions: "Upload a photo of the reusable items you used and write what you learned about plastic pollution and alternatives."
    },
    {
        id: "clean-local-park",
        title: "Clean a Local Park",
        points: 45,
        description: "Spend time cleaning litter from a neighborhood park or green space to improve the local environment.",
        instructions: "Take a before or after photo of the cleanup and describe what you learned about the impact of litter and community service."
    },
    {
        id: "start-compost-bin",
        title: "Start a Compost Bin",
        points: 35,
        description: "Build or begin a compost bin at home or school to turn food scraps into nutrient-rich soil.",
        instructions: "Share a photo of your compost setup and explain what you learned about composting and reducing organic waste."
    },
    {
        id: "use-public-transport",
        title: "Use Public Transport for a Day",
        points: 30,
        description: "Travel using public transportation, bike, or walk instead of using a private car for one day.",
        instructions: "Upload a photo of your transit trip and write what you learned about low-emission travel and healthier commuting choices."
    },
    {
        id: "meatless-meal",
        title: "Try a Meatless Meal",
        points: 25,
        description: "Prepare or enjoy a plant-based meal to reduce your carbon footprint from food choices.",
        instructions: "Share a photo of your meal and describe what you learned about sustainable eating and how food choices affect the environment."
    },
    {
        id: "switch-off-standby",
        title: "Switch off Standby Power",
        points: 20,
        description: "Turn off unused electronics and unplug devices that use power while in standby mode.",
        instructions: "Take a photo of the devices you switched off and write what you learned about saving energy in daily life."
    },
    {
        id: "pick-up-litter",
        title: "Pick Up Litter",
        points: 35,
        description: "Collect litter from a street, schoolyard, or beach to help keep your community clean.",
        instructions: "Post a photo of your cleanup effort and explain what you learned about the importance of reducing waste in public spaces."
    },
    {
        id: "reusable-kit",
        title: "Create a Reusable Kit",
        points: 25,
        description: "Put together a reusable kit with items like a refillable bottle, cloth bag, and lunch container.",
        instructions: "Show your kit in a photo and describe what you learned about reducing single-use products and supporting sustainable habits."
    },
    {
        id: "learn-recycling-rules",
        title: "Learn Recycling Rules",
        points: 20,
        description: "Research your local recycling guidelines and practice sorting materials correctly.",
        instructions: "Upload a photo of your sorted recycling and explain what you learned about how recycling works and why it matters."
    },
    {
        id: "donate-repair-electronics",
        title: "Donate or Repair Electronics",
        points: 30,
        description: "Find old electronics to repair, donate, or recycle instead of throwing them away.",
        instructions: "Take a photo of the device and share what you learned about responsible e-waste disposal and reuse."
    },
    {
        id: "plant-native-flowers",
        title: "Plant Native Flowers",
        points: 40,
        description: "Plant native flowers or plants that support pollinators and local biodiversity.",
        instructions: "Post a photo of your planting and describe what you learned about supporting insects and healthy ecosystems."
    },
    {
        id: "save-food-waste",
        title: "Save Food Waste",
        points: 25,
        description: "Plan meals and store food carefully to reduce waste and make the most of every ingredient.",
        instructions: "Upload a photo of your food-saving strategy and write what you learned about the environmental impact of food waste."
    },
    {
        id: "reduce-shower-time",
        title: "Reduce Shower Time",
        points: 20,
        description: "Shorten your shower by a few minutes to save water and energy.",
        instructions: "Share a photo or timer screenshot and explain what you learned about conserving water in everyday routines."
    },
    {
        id: "share-climate-facts",
        title: "Share Climate Facts",
        points: 20,
        description: "Create a poster, video, or social post that shares climate facts and encourages others to act.",
        instructions: "Upload a photo of your message and describe what you learned about communicating climate awareness."
    },
    {
        id: "build-bird-feeder",
        title: "Build a Bird Feeder",
        points: 35,
        description: "Make a simple bird feeder to help local birds find food and stay healthy.",
        instructions: "Post a photo of your feeder and explain what you learned about wildlife care and habitat support."
    },
    {
        id: "explore-local-wildlife",
        title: "Explore Local Wildlife",
        points: 15,
        description: "Go outside and observe local wildlife in a park, garden, or natural area.",
        instructions: "Upload a photo of what you observed and describe what you learned about plants, animals, or ecosystems near you."
    },
    {
        id: "organize-cleanup",
        title: "Organize a Cleanup",
        points: 45,
        description: "Bring friends or family together to organize a clean-up event for your neighborhood or school.",
        instructions: "Share a photo of your team and write what you learned about teamwork and keeping spaces clean."
    },
    {
        id: "start-mini-garden",
        title: "Start a Mini Garden",
        points: 40,
        description: "Begin a mini garden with herbs, vegetables, or flowers to grow food or support pollinators.",
        instructions: "Upload a photo of your garden and explain what you learned about growing plants and caring for a green space."
    }
];

function renderChallenges() {
    let output = "";
    challenges.forEach(challenge => {
        output += `
            <div class="card p-4 mb-4">
                <div class="d-flex justify-content-between align-items-start mb-3">
                    <div>
                        <h4>${challenge.title}</h4>
                        <p class="text-success mb-1">${challenge.points} Points</p>
                    </div>
                    <button class="btn btn-success btn-sm" onclick="toggleChallengeForm('${challenge.id}')">Participate</button>
                </div>
                <p>${challenge.description}</p>
                <div id="${challenge.id}-form" class="challenge-form d-none bg-light p-3 rounded">
                    <p><strong>How to complete this challenge:</strong> ${challenge.instructions}</p>
                    <div class="mb-3">
                        <label class="form-label"><i class="fas fa-camera"></i> Upload your challenge photo</label>
                        <input id="${challenge.id}-photo" class="form-control" type="file" accept="image/*" onchange="previewChallengePhoto(event, '${challenge.id}')">
                        <div id="${challenge.id}-preview" class="mt-3"></div>
                    </div>
                    <div class="mb-3">
                        <label class="form-label"><i class="fas fa-pen"></i> What I learned</label>
                        <textarea id="${challenge.id}-reflection" class="form-control" rows="4" placeholder="Write what you learned while completing this challenge..."></textarea>
                    </div>
                    <button class="btn btn-primary" onclick="submitChallenge('${challenge.id}')">Submit Challenge</button>
                    <div id="${challenge.id}-message" class="mt-3"></div>
                </div>
            </div>
        `;
    });
    document.getElementById("challengeContainer").innerHTML = output;
}

function toggleChallengeForm(challengeId) {
    const form = document.getElementById(`${challengeId}-form`);
    if (!form) return;
    form.classList.toggle('d-none');
    if (!form.classList.contains('d-none')) {
        form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function previewChallengePhoto(event, challengeId) {
    const preview = document.getElementById(`${challengeId}-preview`);
    const file = event.target.files[0];
    if (!file) {
        preview.innerHTML = '';
        return;
    }
    if (!file.type.startsWith('image/')) {
        preview.innerHTML = '<div class="alert alert-warning">Please choose a valid image file.</div>';
        return;
    }
    const reader = new FileReader();
    reader.onload = function (e) {
        preview.innerHTML = `<img src="${e.target.result}" class="img-fluid rounded" style="max-width: 250px;" alt="Challenge photo">`;
    };
    reader.readAsDataURL(file);
}

function submitChallenge(challengeId) {
    const photoInput = document.getElementById(`${challengeId}-photo`);
    const reflectionInput = document.getElementById(`${challengeId}-reflection`);
    const message = document.getElementById(`${challengeId}-message`);

    const reflection = reflectionInput.value.trim();
    const file = photoInput.files[0];

    if (!file) {
        message.innerHTML = '<div class="alert alert-warning">Please upload a photo of your challenge first.</div>';
        return;
    }
    if (!reflection) {
        message.innerHTML = '<div class="alert alert-warning">Please write what you learned from the challenge.</div>';
        return;
    }
    if (!file.type.startsWith('image/')) {
        message.innerHTML = '<div class="alert alert-warning">Please select a valid image file.</div>';
        return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
        const submission = {
            title: challenges.find(item => item.id === challengeId)?.title || 'Challenge',
            challengeId,
            reflection,
            imageData: e.target.result,
            submittedAt: new Date().toISOString()
        };
        
        // Save to localStorage as backup
        localStorage.setItem(`challenge-submission-${challengeId}`, JSON.stringify(submission));
        
        // Create FormData to send to backend
        const formData = new FormData();
        formData.append('challengeId', challengeId);
        formData.append('description', reflection);
        formData.append('image', file);
        
        // Get userId from localStorage (set during login)
        const userId = localStorage.getItem('userId');
        if (userId) {
            formData.append('userId', userId);
        }
        
        // Send to backend API
        fetch('http://localhost:5000/api/activity/upload', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data._id) {
                message.innerHTML = '<div class="alert alert-success">Your challenge submission has been saved to your profile! Great work!</div>';
                renderSavedSubmissions();
            } else {
                message.innerHTML = '<div class="alert alert-info">Submission saved locally. Make sure you are logged in for it to sync to your profile.</div>';
                renderSavedSubmissions();
            }
        })
        .catch(error => {
            console.error('Error uploading to backend:', error);
            message.innerHTML = '<div class="alert alert-info">Submission saved locally. Make sure you are logged in for it to sync to your profile.</div>';
            renderSavedSubmissions();
        });
    };
    reader.readAsDataURL(file);
}

function renderSavedSubmissions() {
    const section = document.getElementById('submissionSection');
    if (!section) return;

    let savedHtml = '<h3>Your Challenge Submissions</h3>';
    let found = false;

    challenges.forEach(challenge => {
        const saved = localStorage.getItem(`challenge-submission-${challenge.id}`);
        if (!saved) return;
        found = true;
        const data = JSON.parse(saved);
        savedHtml += `
            <div class="card p-3 mb-3">
                <h5>${data.title}</h5>
                <p class="text-muted">Submitted on ${new Date(data.submittedAt).toLocaleString()}</p>
                <div class="mb-3"><img src="${data.imageData}" class="img-fluid rounded" style="max-width: 300px;" alt="Saved challenge photo"></div>
                <p><strong>What I learned:</strong></p>
                <p>${data.reflection}</p>
            </div>
        `;
    });

    if (!found) {
        savedHtml += '<p class="text-muted">No completed challenges saved yet. Submit a challenge above to see it here.</p>';
    }

    section.innerHTML = savedHtml;
}

renderChallenges();
renderSavedSubmissions();
