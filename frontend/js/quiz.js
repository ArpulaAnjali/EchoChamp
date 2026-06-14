const quizLevels = [
    {
        name: 'Level 1',
        badge: 'Green Beginner',
        icon: '🌱',
        difficulty: 'Beginner',
        questions: [
            {
                text: 'Which of these is a renewable energy source?',
                choices: ['Coal', 'Solar', 'Petrol', 'Natural Gas'],
                answer: 'Solar'
            },
            {
                text: 'Which action is part of the 3 R\'s?',
                choices: ['Refuse', 'Reuse', 'Reheat', 'Repaint'],
                answer: 'Reuse'
            },
            {
                text: 'What should you do with empty plastic bottles?',
                choices: ['Throw in trash', 'Recycle them', 'Burn them', 'Bury them'],
                answer: 'Recycle them'
            },
            {
                text: 'What is the main purpose of conserving water?',
                choices: ['Save money', 'Protect the environment', 'Increase pollution', 'Create waste'],
                answer: 'Protect the environment'
            },
            {
                text: 'Which animal is endangered due to habitat loss?',
                choices: ['Pigeon', 'Panda', 'Sparrow', 'Crow'],
                answer: 'Panda'
            },
            {
                text: 'What is composting?',
                choices: ['Burning waste', 'Turning organic waste into soil', 'Burying plastic', 'Melting metals'],
                answer: 'Turning organic waste into soil'
            },
            {
                text: 'Which is NOT a greenhouse gas?',
                choices: ['Carbon Dioxide', 'Methane', 'Oxygen', 'Nitrous Oxide'],
                answer: 'Oxygen'
            },
            {
                text: 'What is the greenest way to travel short distances?',
                choices: ['Car', 'Scooter', 'Bicycle', 'Bus'],
                answer: 'Bicycle'
            },
            {
                text: 'Which forest is known as the "lungs of the Earth"?',
                choices: ['Taiga', 'Amazon', 'Savanna', 'Temperate'],
                answer: 'Amazon'
            },
            {
                text: 'What does "biodiversity" mean?',
                choices: ['Diversity of cities', 'Variety of living organisms', 'Diversity of buildings', 'Variety of cars'],
                answer: 'Variety of living organisms'
            }
        ]
    },
    {
        name: 'Level 2',
        badge: 'Eco Learner',
        icon: '🌿',
        difficulty: 'Intermediate',
        questions: [
            {
                text: 'Which gas contributes most to global warming?',
                choices: ['Oxygen', 'Carbon Dioxide', 'Helium', 'Nitrogen'],
                answer: 'Carbon Dioxide'
            },
            {
                text: 'What is a good way to save electricity?',
                choices: ['Leave lights on', 'Use LED bulbs', 'Use more appliances', 'Keep fridge open'],
                answer: 'Use LED bulbs'
            },
            {
                text: 'Which material can be composted?',
                choices: ['Styrofoam', 'Paper', 'Glass', 'Aluminum'],
                answer: 'Paper'
            },
            {
                text: 'What does planting trees help reduce?',
                choices: ['Carbon footprint', 'Ocean levels', 'Noise', 'Sandstorms'],
                answer: 'Carbon footprint'
            },
            {
                text: 'Which is a non-renewable resource?',
                choices: ['Solar energy', 'Wind energy', 'Coal', 'Geothermal energy'],
                answer: 'Coal'
            },
            {
                text: 'What is the primary cause of ocean pollution?',
                choices: ['Fish', 'Plastic waste', 'Salt', 'Waves'],
                answer: 'Plastic waste'
            },
            {
                text: 'Which country is leading in renewable energy adoption?',
                choices: ['USA', 'China', 'Germany', 'Japan'],
                answer: 'Germany'
            },
            {
                text: 'What is the greenhouse effect?',
                choices: ['Growing plants in glass', 'Trapping heat in atmosphere', 'Pollution from cars', 'Water evaporation'],
                answer: 'Trapping heat in atmosphere'
            },
            {
                text: 'Which is an example of a sustainable material?',
                choices: ['Plastic', 'Bamboo', 'Styrofoam', 'Polyester'],
                answer: 'Bamboo'
            },
            {
                text: 'What percentage of Earth\'s oxygen is produced by oceans?',
                choices: ['20%', '50%', '70%', '90%'],
                answer: '70%'
            }
        ]
    },
    {
        name: 'Level 3',
        badge: 'Eco Genius',
        icon: '🌍',
        difficulty: 'Advanced',
        questions: [
            {
                text: 'Which habit reduces single-use plastic?',
                choices: ['Using plastic bags', 'Using reusable bottles', 'Buying bottled water', 'Using disposable cutlery'],
                answer: 'Using reusable bottles'
            },
            {
                text: 'What is an eco-friendly way to travel long distances?',
                choices: ['Driving alone', 'Flying', 'Using public transport', 'Taking a cruise'],
                answer: 'Using public transport'
            },
            {
                text: 'Which product is best to buy to reduce waste?',
                choices: ['Fast fashion', 'Reusable items', 'Single-use cups', 'Plastic straws'],
                answer: 'Reusable items'
            },
            {
                text: 'How can you save water in the bathroom?',
                choices: ['Leave tap running', 'Take shorter showers', 'Use more soap', 'Water the plants with tap water'],
                answer: 'Take shorter showers'
            },
            {
                text: 'What is "carbon footprint"?',
                choices: ['Footprints made of carbon', 'Total greenhouse gases produced', 'Pollution from shoes', 'Damage to soil'],
                answer: 'Total greenhouse gases produced'
            },
            {
                text: 'Which energy source is most sustainable?',
                choices: ['Oil', 'Nuclear', 'Wind and Solar', 'Natural Gas'],
                answer: 'Wind and Solar'
            },
            {
                text: 'What is "fast fashion"?',
                choices: ['Quick clothing delivery', 'Cheaply made trendy clothes', 'Fast sewing', 'Premium brands'],
                answer: 'Cheaply made trendy clothes'
            },
            {
                text: 'Which action has the biggest environmental impact?',
                choices: ['Using plastic straws', 'Flying frequently', 'Using plastic bags', 'Using paper plates'],
                answer: 'Flying frequently'
            },
            {
                text: 'What is "upcycling"?',
                choices: ['Throwing away items', 'Creating new items from waste', 'Buying new items', 'Storing items'],
                answer: 'Creating new items from waste'
            },
            {
                text: 'Which is a sign of climate change?',
                choices: ['More rain', 'Rising sea levels', 'Stronger winds', 'Colder winters'],
                answer: 'Rising sea levels'
            }
        ]
    },
    {
        name: 'Level 4',
        badge: 'Green Warrior',
        icon: '🌳',
        difficulty: 'Advanced',
        questions: [
            {
                text: 'What is "deforestation"?',
                choices: ['Planting trees', 'Taking care of forests', 'Clearing forests for other uses', 'Growing new trees'],
                answer: 'Clearing forests for other uses'
            },
            {
                text: 'Which practice helps prevent soil erosion?',
                choices: ['Removing trees', 'Planting vegetation', 'Digging holes', 'Using chemicals'],
                answer: 'Planting vegetation'
            },
            {
                text: 'What is "eutrophication"?',
                choices: ['Ocean warming', 'Nutrient overload in water', 'Wind pollution', 'Soil degradation'],
                answer: 'Nutrient overload in water'
            },
            {
                text: 'Which country has the largest rainforest?',
                choices: ['Indonesia', 'Brazil', 'Peru', 'Congo'],
                answer: 'Brazil'
            },
            {
                text: 'What is "global warming"?',
                choices: ['Local heat', 'Increase in Earth\'s average temperature', 'Weather change', 'Seasonal variation'],
                answer: 'Increase in Earth\'s average temperature'
            },
            {
                text: 'Which animal is a keystone species?',
                choices: ['Domestic cat', 'Sea otter', 'Chicken', 'Pig'],
                answer: 'Sea otter'
            },
            {
                text: 'What is "renewable energy"?',
                choices: ['Energy from coal', 'Energy that can be replenished', 'Expensive energy', 'Limited energy'],
                answer: 'Energy that can be replenished'
            },
            {
                text: 'Which is a consequence of plastic pollution?',
                choices: ['Cleaner oceans', 'Harm to marine life', 'Better crops', 'Cleaner air'],
                answer: 'Harm to marine life'
            },
            {
                text: 'What is "sustainable agriculture"?',
                choices: ['Using only pesticides', 'Farming that preserves the land', 'Monoculture farming', 'Industrial farming'],
                answer: 'Farming that preserves the land'
            },
            {
                text: 'Which is a renewable resource?',
                choices: ['Fossil fuels', 'Minerals', 'Water (when managed well)', 'Uranium'],
                answer: 'Water (when managed well)'
            }
        ]
    },
    {
        name: 'Level 5',
        badge: 'Climate Champion',
        icon: '⚡',
        difficulty: 'Expert',
        questions: [
            {
                text: 'What is the "Paris Agreement"?',
                choices: ['Trade agreement', 'Climate accord to limit warming', 'Peace treaty', 'Business deal'],
                answer: 'Climate accord to limit warming'
            },
            {
                text: 'Which human activity causes the most CO2 emissions?',
                choices: ['Transportation', 'Energy production', 'Agriculture', 'Manufacturing'],
                answer: 'Energy production'
            },
            {
                text: 'What is "methane"?',
                choices: ['A type of plastic', 'A potent greenhouse gas', 'A soil type', 'A pesticide'],
                answer: 'A potent greenhouse gas'
            },
            {
                text: 'Which is a "carbon sink"?',
                choices: ['Landfill', 'Forest', 'River', 'Mountain'],
                answer: 'Forest'
            },
            {
                text: 'What is "circular economy"?',
                choices: ['Round shaped economy', 'Recycling in a cycle', 'Linear production', 'Waste generation'],
                answer: 'Recycling in a cycle'
            },
            {
                text: 'Which renewable source is most consistent?',
                choices: ['Solar', 'Wind', 'Geothermal', 'Tidal'],
                answer: 'Geothermal'
            },
            {
                text: 'What is "climate justice"?',
                choices: ['Legal system', 'Fair treatment regarding climate impacts', 'Climate science', 'Weather prediction'],
                answer: 'Fair treatment regarding climate impacts'
            },
            {
                text: 'Which effect causes rising sea levels?',
                choices: ['More fish', 'Melting ice caps and thermal expansion', 'More water sources', 'More rain'],
                answer: 'Melting ice caps and thermal expansion'
            },
            {
                text: 'What is "net zero emissions"?',
                choices: ['No emission reduction', 'Balancing emissions with removal', 'Zero people', 'Zero energy'],
                answer: 'Balancing emissions with removal'
            },
            {
                text: 'Which country has best environmental policies?',
                choices: ['USA', 'Costa Rica', 'Russia', 'Australia'],
                answer: 'Costa Rica'
            }
        ]
    },
    {
        name: 'Level 6',
        badge: 'Earth Protector',
        icon: '🌐',
        difficulty: 'Expert',
        questions: [
            {
                text: 'What is "biodiversity hotspot"?',
                choices: ['Hot climate zone', 'Area with high species diversity', 'Tropical region', 'Volcanic area'],
                answer: 'Area with high species diversity'
            },
            {
                text: 'Which animal is extinct?',
                choices: ['Panda', 'Tiger', 'Dodo', 'Elephant'],
                answer: 'Dodo'
            },
            {
                text: 'What is "pollinator collapse"?',
                choices: ['City pollution', 'Decline in pollinator populations', 'Bee aggression', 'Flower death'],
                answer: 'Decline in pollinator populations'
            },
            {
                text: 'What does "ecosystem" mean?',
                choices: ['A system of cities', 'Community of organisms and environment', 'Economic system', 'Only plants'],
                answer: 'Community of organisms and environment'
            },
            {
                text: 'Which is a renewable resource in danger?',
                choices: ['Plastic', 'Metal', 'Fish stocks', 'Concrete'],
                answer: 'Fish stocks'
            },
            {
                text: 'What is "ocean acidification"?',
                choices: ['Adding acid to oceans', 'Decrease in pH due to CO2', 'Salty water', 'Pollution'],
                answer: 'Decrease in pH due to CO2'
            },
            {
                text: 'Which is a sustainable city initiative?',
                choices: ['More cars', 'Public transport and green spaces', 'More factories', 'Less parks'],
                answer: 'Public transport and green spaces'
            },
            {
                text: 'What is "invasive species"?',
                choices: ['Species from space', 'Non-native species harming ecosystem', 'Dangerous animals', 'Extinct species'],
                answer: 'Non-native species harming ecosystem'
            },
            {
                text: 'Which fossil fuel has lowest emissions?',
                choices: ['Coal', 'Oil', 'Natural gas', 'Uranium'],
                answer: 'Natural gas'
            },
            {
                text: 'What is "ecological footprint"?',
                choices: ['Actual footprint on soil', 'Land area needed for resources', 'Pollution level', 'Energy usage'],
                answer: 'Land area needed for resources'
            }
        ]
    },
    {
        name: 'Level 7',
        badge: 'Sustainability Expert',
        icon: '♻️',
        difficulty: 'Expert',
        questions: [
            {
                text: 'What is "ESG" in investment?',
                choices: ['Economic Safety Group', 'Environmental, Social, Governance', 'Energy Security', 'Emergency Support'],
                answer: 'Environmental, Social, Governance'
            },
            {
                text: 'Which sector produces most waste?',
                choices: ['Agriculture', 'Manufacturing', 'Construction', 'Services'],
                answer: 'Construction'
            },
            {
                text: 'What is "permafrost"?',
                choices: ['Permanent forest', 'Frozen ground that stays frozen', 'Permanent snow', 'Frozen water'],
                answer: 'Frozen ground that stays frozen'
            },
            {
                text: 'Which renewable energy has highest efficiency?',
                choices: ['Wind 35%', 'Solar 20%', 'Geothermal 70%', 'Tidal 50%'],
                answer: 'Geothermal 70%'
            },
            {
                text: 'What is "sustainable fashion"?',
                choices: ['Stylish clothes', 'Ethically and environmentally responsible clothing', 'Expensive fashion', 'Trendy clothes'],
                answer: 'Ethically and environmentally responsible clothing'
            },
            {
                text: 'Which country is carbon negative?',
                choices: ['USA', 'Panama', 'Germany', 'Japan'],
                answer: 'Panama'
            },
            {
                text: 'What is "regenerative agriculture"?',
                choices: ['Using old techniques', 'Farming that rebuilds soil health', 'Monoculture', 'Intensive farming'],
                answer: 'Farming that rebuilds soil health'
            },
            {
                text: 'Which is a "microplastic"?',
                choices: ['Small plastic toy', 'Tiny plastic particles in environment', 'Plastic from small factories', 'Nano plastic'],
                answer: 'Tiny plastic particles in environment'
            },
            {
                text: 'What is "carbon offsetting"?',
                choices: ['Reducing carbon', 'Compensating emissions through projects', 'Carbon storage', 'Carbon capture'],
                answer: 'Compensating emissions through projects'
            },
            {
                text: 'Which marine ecosystem is most productive?',
                choices: ['Open ocean', 'Coral reefs', 'Deep sea', 'Polar regions'],
                answer: 'Coral reefs'
            }
        ]
    },
    {
        name: 'Level 8',
        badge: 'Green Innovator',
        icon: '🔋',
        difficulty: 'Expert',
        questions: [
            {
                text: 'What is "green technology"?',
                choices: ['Technology that is green colored', 'Technology reducing environmental impact', 'New technology', 'Computer technology'],
                answer: 'Technology reducing environmental impact'
            },
            {
                text: 'Which renewable energy requires least maintenance?',
                choices: ['Wind turbines', 'Solar panels', 'Hydroelectric dams', 'Geothermal plants'],
                answer: 'Solar panels'
            },
            {
                text: 'What is "zero waste"?',
                choices: ['No garbage', 'Minimizing waste to landfills', 'Clean trash', 'Incineration'],
                answer: 'Minimizing waste to landfills'
            },
            {
                text: 'Which agriculture practice saves most water?',
                choices: ['Flood irrigation', 'Drip irrigation', 'Sprinkler irrigation', 'Manual watering'],
                answer: 'Drip irrigation'
            },
            {
                text: 'What is "green building"?',
                choices: ['Buildings painted green', 'Energy efficient sustainable buildings', 'Large buildings', 'Modern buildings'],
                answer: 'Energy efficient sustainable buildings'
            },
            {
                text: 'Which country has strongest environmental laws?',
                choices: ['USA', 'Sweden', 'Russia', 'Australia'],
                answer: 'Sweden'
            },
            {
                text: 'What is "precision agriculture"?',
                choices: ['Exact farming location', 'Data-driven farming optimization', 'Careful planting', 'Hand farming'],
                answer: 'Data-driven farming optimization'
            },
            {
                text: 'Which is a threat to polar bears?',
                choices: ['Hunting', 'Lack of food', 'Sea ice melting', 'All of above'],
                answer: 'All of above'
            },
            {
                text: 'What is "blue carbon"?',
                choices: ['Ocean pollution', 'Carbon stored in coastal ecosystems', 'Blue gas', 'Water carbon'],
                answer: 'Carbon stored in coastal ecosystems'
            },
            {
                text: 'Which energy transition is fastest?',
                choices: ['Coal to oil', 'Oil to renewable', 'Gas to coal', 'Nuclear to renewable'],
                answer: 'Oil to renewable'
            }
        ]
    },
    {
        name: 'Level 9',
        badge: 'Environmental Scholar',
        icon: '🎓',
        difficulty: 'Master',
        questions: [
            {
                text: 'What is "anthropocene"?',
                choices: ['Ancient period', 'Current era dominated by humans', 'Future age', 'Ice age'],
                answer: 'Current era dominated by humans'
            },
            {
                text: 'Which tipping point is closest?',
                choices: ['Ice sheet collapse', 'Amazon dieback', 'Permafrost thaw', 'All equal'],
                answer: 'Permafrost thaw'
            },
            {
                text: 'What is "IPCC" in climate?',
                choices: ['International Police', 'Intergovernmental Panel on Climate Change', 'Industrial Pollution', 'International Power'],
                answer: 'Intergovernmental Panel on Climate Change'
            },
            {
                text: 'Which feedback loop amplifies warming most?',
                choices: ['Ocean heating', 'Albedo effect', 'Water vapor increase', 'Cloud formation'],
                answer: 'Water vapor increase'
            },
            {
                text: 'What is "climate resilience"?',
                choices: ['Climate stability', 'Ability to adapt to climate change', 'Strong weather', 'Temperature control'],
                answer: 'Ability to adapt to climate change'
            },
            {
                text: 'Which sector needs most decarbonization?',
                choices: ['Agriculture', 'Transportation', 'Energy', 'Cement production'],
                answer: 'Cement production'
            },
            {
                text: 'What is "nature-based solutions"?',
                choices: ['Parks only', 'Using ecosystems to solve problems', 'Artificial nature', 'Building nature'],
                answer: 'Using ecosystems to solve problems'
            },
            {
                text: 'Which country leads in green bonds?',
                choices: ['Japan', 'Germany', 'China', 'USA'],
                answer: 'USA'
            },
            {
                text: 'What is "just transition"?',
                choices: ['Fair energy shift', 'Quick change', 'Just laws', 'Justice system'],
                answer: 'Fair energy shift'
            },
            {
                text: 'Which is most efficient energy source overall?',
                choices: ['Nuclear', 'Wind', 'Geothermal', 'Hydroelectric'],
                answer: 'Hydroelectric'
            }
        ]
    },
    {
        name: 'Level 10',
        badge: 'Planet Master',
        icon: '🏆',
        difficulty: 'Master',
        questions: [
            {
                text: 'What is "planetary boundaries"?',
                choices: ['Earth borders', 'Safe operating limits for Earth', 'Climate zones', 'Continents'],
                answer: 'Safe operating limits for Earth'
            },
            {
                text: 'Which emission pathway limits warming to 1.5°C?',
                choices: ['BAU (Business as usual)', 'SSP1-1.9', 'SSP2-4.5', 'SSP5-8.5'],
                answer: 'SSP1-1.9'
            },
            {
                text: 'What is "stranded assets"?',
                choices: ['Lost assets', 'Assets becoming worthless due to climate action', 'Abandoned property', 'Forgotten investments'],
                answer: 'Assets becoming worthless due to climate action'
            },
            {
                text: 'Which feedback mechanism is least understood?',
                choices: ['Albedo effect', 'Cloud feedback', 'Water vapor', 'Ice sheet dynamics'],
                answer: 'Cloud feedback'
            },
            {
                text: 'What is "ecosystem services"?',
                choices: ['Park services', 'Benefits nature provides to humans', 'Animal care', 'Plant services'],
                answer: 'Benefits nature provides to humans'
            },
            {
                text: 'Which mitigation strategy has lowest cost?',
                choices: ['Solar farms', 'Wind farms', 'Energy efficiency', 'Carbon capture'],
                answer: 'Energy efficiency'
            },
            {
                text: 'What is "biomimicry"?',
                choices: ['Imitating life forms', 'Learning from and imitating nature', 'Copying animals', 'Mimicking plants'],
                answer: 'Learning from and imitating nature'
            },
            {
                text: 'Which is a "wicked problem"?',
                choices: ['Crime', 'Climate change', 'Traffic', 'Pollution'],
                answer: 'Climate change'
            },
            {
                text: 'What is "regenerative economy"?',
                choices: ['Recycling only', 'Economy that restores and improves systems', 'Growing economy', 'Strong economy'],
                answer: 'Economy that restores and improves systems'
            },
            {
                text: 'Which is the ultimate goal of sustainability?',
                choices: ['Stop all production', 'Balance human needs with planetary limits', 'No growth', 'No development'],
                answer: 'Balance human needs with planetary limits'
            }
        ]
    }
];

let selectedLevelIndex = null;
let currentQuestionIndex = 0;
let score = 0;
let ecoPoints = 0;
let timer = 30;
let timerId = null;
let answered = false;

const elements = {
    levelSelectionView: document.getElementById('levelSelectionView'),
    quizView: document.getElementById('quizView'),
    levelCardsContainer: document.getElementById('levelCardsContainer'),
    levelTitle: document.getElementById('levelTitle'),
    questionNumber: document.getElementById('questionNumber'),
    questionTotal: document.getElementById('questionTotal'),
    timer: document.getElementById('timer'),
    questionText: document.getElementById('questionText'),
    optionsContainer: document.getElementById('optionsContainer'),
    submitBtn: document.getElementById('submitBtn'),
    nextBtn: document.getElementById('nextBtn'),
    backBtn: document.getElementById('backBtn'),
    score: document.getElementById('score'),
    coins: document.getElementById('coins'),
    badge: document.getElementById('badge'),
    feedback: document.getElementById('feedback'),
    completion: document.getElementById('completion'),
    finalScore: document.getElementById('finalScore'),
    finalCoins: document.getElementById('finalCoins'),
    finalBadge: document.getElementById('finalBadge'),
    continueBtn: document.getElementById('continueBtn')
};

function renderLevelCards() {
    elements.levelCardsContainer.innerHTML = quizLevels.map((level, index) => `
        <div class="col-md-6">
            <div class="card shadow p-4 text-center h-100" style="cursor: pointer; transition: all 0.3s;" onclick="startLevel(${index})">
                <h1 style="font-size: 3rem; margin: 0.5rem 0;">${level.icon}</h1>
                <h4>${level.name}</h4>
                <p class="text-muted">${level.difficulty}</p>
                <p class="small">${level.questions.length} Questions</p>
                <span class="badge bg-success">${level.badge}</span>
            </div>
        </div>
    `).join('');
}

function startLevel(levelIndex) {
    selectedLevelIndex = levelIndex;
    currentQuestionIndex = 0;
    score = 0;
    ecoPoints = 0;
    
    elements.levelSelectionView.classList.add('d-none');
    elements.quizView.classList.remove('d-none');
    elements.completion.classList.add('d-none');
    
    const currentLevel = quizLevels[selectedLevelIndex];
    elements.levelTitle.innerText = currentLevel.name + ' - ' + currentLevel.badge;
    
    loadQuestion();
}

function backToLevels() {
    clearInterval(timerId);
    selectedLevelIndex = null;
    currentQuestionIndex = 0;
    score = 0;
    ecoPoints = 0;
    
    elements.levelSelectionView.classList.remove('d-none');
    elements.quizView.classList.add('d-none');
    elements.completion.classList.add('d-none');
    hideFeedback();
}

function startTimer() {
    clearInterval(timerId);
    timer = 30;
    elements.timer.innerText = timer;
    timerId = setInterval(() => {
        timer -= 1;
        elements.timer.innerText = timer;
        if (timer <= 0) {
            clearInterval(timerId);
            submitAnswer(true);
        }
    }, 1000);
}

function getCurrentQuestion() {
    return quizLevels[selectedLevelIndex].questions[currentQuestionIndex];
}

function updateStats() {
    elements.score.innerText = score;
    elements.coins.innerText = ecoPoints;
    elements.badge.innerText = quizLevels[selectedLevelIndex].badge;
}

function showFeedback(message, type) {
    elements.feedback.className = `alert alert-${type}`;
    elements.feedback.innerText = message;
    elements.feedback.classList.remove('d-none');
}

function hideFeedback() {
    elements.feedback.classList.add('d-none');
}

function loadQuestion() {
    answered = false;
    hideFeedback();
    const currentLevel = quizLevels[selectedLevelIndex];
    const currentQuestion = getCurrentQuestion();

    elements.questionNumber.innerText = currentQuestionIndex + 1;
    elements.questionTotal.innerText = currentLevel.questions.length;
    elements.questionText.innerText = currentQuestion.text;

    elements.optionsContainer.innerHTML = currentQuestion.choices
        .map((choice, index) => `
            <div class="form-check mb-2">
                <input class="form-check-input" type="radio" name="option" id="option${index}" value="${choice}">
                <label class="form-check-label" for="option${index}">${choice}</label>
            </div>
        `)
        .join('');

    elements.submitBtn.disabled = false;
    elements.nextBtn.disabled = true;
    startTimer();
    updateStats();
}

function completeLevelQuiz() {
    clearInterval(timerId);
    elements.completion.classList.remove('d-none');
    elements.finalScore.innerText = score;
    elements.finalCoins.innerText = ecoPoints;
    elements.finalBadge.innerText = quizLevels[selectedLevelIndex].badge;
    elements.submitBtn.disabled = true;
    elements.nextBtn.disabled = true;
    
    // Check for achievements
    unlockAchievement('first_quiz');
    
    // Check if perfect score (10/10)
    if (score === 10) {
        unlockAchievement('perfect_score');
    }
    
    // Track completed levels
    const completedLevels = JSON.parse(localStorage.getItem('completedLevels')) || [];
    if (!completedLevels.includes(selectedLevelIndex)) {
        completedLevels.push(selectedLevelIndex);
        localStorage.setItem('completedLevels', JSON.stringify(completedLevels));
    }
    
    // Check for level master achievement (5 different levels completed)
    if (completedLevels.length >= 5) {
        unlockAchievement('level_5_complete');
    }
}

function submitAnswer(isTimeout = false) {
    if (answered) return;
    answered = true;
    clearInterval(timerId);

    const selected = document.querySelector('input[name="option"]:checked');
    const currentQuestion = getCurrentQuestion();

    if (!selected && !isTimeout) {
        showFeedback('Please choose an answer before submitting.', 'warning');
        answered = false;
        startTimer();
        return;
    }

    let correct = !isTimeout && selected.value === currentQuestion.answer;
    if (correct) {
        score += 1;
        ecoPoints += 10;
        // Add points using rewards system
        const totalPoints = addEcoPoints(10, 'quiz');
        showFeedback(`Correct! +10 eco points. (Total: ${totalPoints})`, 'success');
    } else {
        const answerText = isTimeout ? 'Time is up!' : 'Wrong answer.';
        showFeedback(`${answerText} The correct answer is: ${currentQuestion.answer}.`, 'danger');
    }

    elements.submitBtn.disabled = true;
    elements.nextBtn.disabled = true;
    updateStats();

    setTimeout(() => {
        if (!elements.completion.classList.contains('d-none')) return;
        nextQuestion();
    }, 1200);
}

function nextQuestion() {
    const currentLevel = quizLevels[selectedLevelIndex];
    currentQuestionIndex += 1;

    if (currentQuestionIndex >= currentLevel.questions.length) {
        completeLevelQuiz();
    } else {
        loadQuestion();
    }
}

// Event Listeners
elements.submitBtn.addEventListener('click', () => submitAnswer(false));
elements.nextBtn.addEventListener('click', nextQuestion);
elements.backBtn.addEventListener('click', backToLevels);
elements.continueBtn.addEventListener('click', backToLevels);

// Initialize
renderLevelCards();