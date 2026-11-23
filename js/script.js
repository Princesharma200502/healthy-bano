// ==================== LANGUAGE TRANSLATIONS ====================
const translations = {
    en: {
        appTitle: "🌱 Healthy Bano",
        appSubtitle: "Your Health, Your Power | 100% Natural & Scientific Way",
        bmiCardTitle: "🔢 Calculate Your BMI",
        ageLabel: "Your Age (years)",
        weightLabel: "Weight (kg)",
        heightLabel: "Height (cm)",
        calcBtn: "Calculate My BMI",
        resultHeading: "📊 Your Result:",
        rangeTitle: "📊 BMI Range Table",
        rangeUnderweight: "<strong style='color:#f44336;'>Underweight:</strong> less than 18.5",
        rangeNormal: "<strong style='color:#4caf50;'>Normal:</strong> 18.5 – 24.9",
        rangeOverweight: "<strong style='color:#ff9800;'>Overweight:</strong> 25 – 29.9",
        rangeObese: "<strong style='color:#d32f2f;'>Obese:</strong> 30 or more",
        dietTitle: "🥗 Your Diet Plan (As per BMI)",
        dietPlaceholder: "Calculate BMI first",
        exerciseTitle: "💪 Exercise Plan",
        exercisePlaceholder: "Calculate BMI first",
        timelineTitle: "⏰ Fitness Timeline",
        timelinePlaceholder: "Calculate BMI first",
        trackerTitle: "📱 Daily Health Tracker (Data Saved)",
        waterLabel: "Glasses of Water",
        waterBtn: "+1 Glass",
        stepLabel: "Steps",
        stepBtn: "+100 Steps",
        sleepLabel: "Hours of Sleep",
        sleepBtn: "+1 Hour",
        tipsTitle: "💡 Health Tips",
        tipBtn: "New Tip",
        historyTitle: "📜 BMI History (Last 5)",
        clearHistoryBtn: "Clear History",
        yogaTitle: "🧘 Yoga & Meditation",
        suryaName: "Surya Namaskar",
        suryaDesc: "12 minutes, 12 benefits",
        pranayamName: "Pranayama",
        pranayamDesc: "10 minutes, calm mind",
        footerText: "🌿 Healthy Bano - Gift of Nature",
        footerSubtext: "Commit, Get Healthy | 100% Ayurvedic Way",
        bmiCategories: {
            underweight: "Underweight ⚠️",
            normal: "Normal - Perfect! 🎉",
            overweight: "Overweight ⚠️",
            obese: "Obese 🚨"
        },
        bmiAdvice: {
            underweight: "You need to gain weight. Eat healthy fats and protein.",
            normal: "You are healthy. Keep it up!",
            overweight: "Lose some weight. Exercise and control your diet.",
            obese: "Consult a doctor. Start diet and exercise immediately."
        },
        dietPlans: {
            underweight: [
                "🥛 Breakfast: Banana + Milk + Dry Fruits + Peanuts",
                "🍛 Lunch: Rajma-Rice + Curd + Ghee",
                "🍲 Dinner: Paneer + Roti + Salad + Jaggery",
                "🥜 Snacks: Makhana + Milk"
            ],
            normal: [
                "🥣 Breakfast: Oats + Fruits + Green Tea",
                "🍛 Lunch: Mixed Dal + 2 Rotis + Salad",
                "🥗 Dinner: Vegetables + Dal + Rice",
                "🌰 Snacks: Roasted Chana + Cucumber"
            ],
            overweight: [
                "🍎 Breakfast: Fruits + Green Tea + 2 Almonds",
                "🥦 Lunch: Grilled Veggies + Salad + Curd + 1 Roti",
                "🥣 Dinner: Salad + Dal + ½ Roti",
                "🥒 Snacks: Puffed Rice + Roasted Chana"
            ],
            obese: [
                "🍏 Breakfast: Only Fruits + Green Tea",
                "🥗 Lunch: Salad + Boiled Veggies + Dal",
                "🥣 Dinner: Salad + Soup (No Roti)",
                "🥕 Snacks: Carrot + Radish"
            ]
        },
        exercisePlans: {
            underweight: [
                "🏋️ Weight Training - 30 min",
                "🧘 Yoga - 20 min",
                "🚶 Walk - 30 min"
            ],
            normal: [
                "🏃 Cardio - 25 min",
                "🧘 Yoga - 20 min",
                "🤸 Stretching - 15 min"
            ],
            overweight: [
                "🚶 Brisk Walk - 45 min",
                "🏊 Swimming - 30 min",
                "🧘 Yoga - 30 min"
            ],
            obese: [
                "🚶 Brisk Walk - 60 min",
                "🏊 Swimming - 45 min",
                "🧘 Yoga - 30 min"
            ]
        },
        timeline: {
            underweight: [
                "🎯 Get healthy weight in 60 days",
                "📅 30 days: +2 kg",
                "📅 60 days: +4 kg"
            ],
            normal: [
                "🎯 Maintain fitness in 30 days",
                "📅 15 days: Toning starts",
                "📅 30 days: Perfect shape"
            ],
            overweight: [
                "🎯 Lose weight in 90 days",
                "📅 30 days: -3 kg",
                "📅 60 days: -6 kg",
                "📅 90 days: -10 kg"
            ],
            obese: [
                "🎯 Healthy life in 180 days",
                "📅 60 days: -5 kg",
                "📅 120 days: -12 kg",
                "📅 180 days: -20 kg"
            ]
        },
        tips: [
            "Drink lukewarm water every morning",
            "Include green vegetables in your meals",
            "Walk for at least 30 minutes daily",
            "Eat jaggery instead of sugar",
            "Eat dinner early",
            "Stay away from stress, meditate",
            "Eat fruits, not fruit juice",
            "Drink more water, get less sick"
        ],
        alertNotNormal: "⚠️ Attention! Your BMI is not in the normal range (18.5–24.9). Please follow the diet and exercise plan."
    },
    hi: {
        appTitle: "🌱 Healthy Bano",
        appSubtitle: "आपका स्वास्थ्य, आपकी शक्ति | 100% नेचुरल और साइंटिफिक तरीका",
        bmiCardTitle: "🔢 अपना BMI कैलकुलेट करें",
        ageLabel: "आपकी उम्र (साल)",
        weightLabel: "वजन (किलो)",
        heightLabel: "ऊंचाई (सेमी)",
        calcBtn: "मेरा BMI निकालें",
        resultHeading: "📊 आपका रिजल्ट:",
        rangeTitle: "📊 BMI Range तालिका",
        rangeUnderweight: "<strong style='color:#f44336;'>कम वजन:</strong> 18.5 से कम",
        rangeNormal: "<strong style='color:#4caf50;'>सामान्य:</strong> 18.5 – 24.9",
        rangeOverweight: "<strong style='color:#ff9800;'>अधिक वजन:</strong> 25 – 29.9",
        rangeObese: "<strong style='color:#d32f2f;'>मोटापा:</strong> 30 या उससे ज्यादा",
        dietTitle: "🥗 आपका डाइट प्लान (BMI के अनुसार)",
        dietPlaceholder: "पहले BMI कैलकुलेट करें",
        exerciseTitle: "💪 एक्सरसाइज प्लान",
        exercisePlaceholder: "पहले BMI कैलकुलेट करें",
        timelineTitle: "⏰ फिटनेस टाइमलाइन",
        timelinePlaceholder: "पहले BMI कैलकुलेट करें",
        trackerTitle: "📱 डेली हेल्थ ट्रैकर (Data Save होगा)",
        waterLabel: "गिलास पानी",
        waterBtn: "+1 गिलास",
        stepLabel: "कदम",
        stepBtn: "+100 कदम",
        sleepLabel: "घंटे नींद",
        sleepBtn: "+1 घंटा",
        tipsTitle: "💡 हेल्थ टिप्स",
        tipBtn: "नई टिप देखें",
        historyTitle: "📜 BMI हिस्ट्री (पिछले 5)",
        clearHistoryBtn: "हिस्ट्री साफ करें",
        yogaTitle: "🧘 योगा & मेडिटेशन",
        suryaName: "सूर्य नमस्कार",
        suryaDesc: "12 मिनट, 12 लाभ",
        pranayamName: "प्राणायाम",
        pranayamDesc: "10 मिनट, शांत मन",
        footerText: "🌿 Healthy Bano - प्रकृति का तोहफा",
        footerSubtext: "संकल्प करो, स्वस्थ बनो | 100% आयुर्वेदिक तरीका",
        bmiCategories: {
            underweight: "कम वजन (Underweight) ⚠️",
            normal: "सामान्य वजन (Normal) - बिल्कुल सही! 🎉",
            overweight: "अधिक वजन (Overweight) ⚠️",
            obese: "मोटापा (Obese) 🚨"
        },
        bmiAdvice: {
            underweight: "आपको वजन बढ़ाने की जरूरत है। हेल्दी फैट्स और प्रोटीन लें।",
            normal: "आप स्वस्थ हैं। ऐसे ही रहें।",
            overweight: "थोड़ा वजन कम करें। एक्सरसाइज करें और खाने में कंट्रोल रखें।",
            obese: "डॉक्टर से मिलें। तुरंत डाइट और एक्सरसाइज शुरू करें।"
        },
        dietPlans: {
            underweight: [
                "🥛 नाश्ता: केला + दूध + ड्राई फ्रूट्स + मूंगफली",
                "🍛 दोपहर: राजमा-चावल + दही + घी",
                "🍲 रात: पनीर + रोटी + सलाद + गुड़",
                "🥜 स्नैक्स: मखाना + दूध"
            ],
            normal: [
                "🥣 नाश्ता: ओट्स + फल + ग्रीन टी",
                "🍛 दोपहर: मिक्स दाल + 2 रोटी + सलाद",
                "🥗 रात: सब्जी + दाल + चावल",
                "🌰 स्नैक्स: भुना चना + खीरा"
            ],
            overweight: [
                "🍎 नाश्ता: फल + ग्रीन टी + 2 बादाम",
                "🥦 दोपहर: ग्रिल्ड सब्जी + सलाद + दही + 1 रोटी",
                "🥣 रात: सलाद + दाल + ½ रोटी",
                "🥒 स्नैक्स: मुरमुरा + भुना चना"
            ],
            obese: [
                "🍏 नाश्ता: सिर्फ फल + ग्रीन टी",
                "🥗 दोपहर: सलाद + उबली सब्जी + दाल",
                "🥣 रात: सलाद + सूप (बिना रोटी)",
                "🥕 स्नैक्स: गाजर + मूली"
            ]
        },
        exercisePlans: {
            underweight: [
                "🏋️ वेट ट्रेनिंग - 30 मिनट",
                "🧘 योगा - 20 मिनट",
                "🚶 वॉक - 30 मिनट"
            ],
            normal: [
                "🏃 कार्डियो - 25 मिनट",
                "🧘 योगा - 20 मिनट",
                "🤸 स्ट्रेचिंग - 15 मिनट"
            ],
            overweight: [
                "🚶 तेज वॉक - 45 मिनट",
                "🏊 स्विमिंग - 30 मिनट",
                "🧘 योगा - 30 मिनट"
            ],
            obese: [
                "🚶 तेज वॉक - 60 मिनट",
                "🏊 स्विमिंग - 45 मिनट",
                "🧘 योगा - 30 मिनट"
            ]
        },
        timeline: {
            underweight: [
                "🎯 60 दिनों में हेल्दी वेट",
                "📅 30 दिन: +2 किलो",
                "📅 60 दिन: +4 किलो"
            ],
            normal: [
                "🎯 30 दिनों में फिटनेस मेंटेन",
                "📅 15 दिन: टोनिंग शुरू",
                "📅 30 दिन: परफेक्ट शेप"
            ],
            overweight: [
                "🎯 90 दिनों में वेट लॉस",
                "📅 30 दिन: -3 किलो",
                "📅 60 दिन: -6 किलो",
                "📅 90 दिन: -10 किलो"
            ],
            obese: [
                "🎯 180 दिनों में हेल्दी लाइफ",
                "📅 60 दिन: -5 किलो",
                "📅 120 दिन: -12 किलो",
                "📅 180 दिन: -20 किलो"
            ]
        },
        tips: [
            "रोज सुबह गुनगुना पानी पिएं",
            "खाने में हरी सब्जियां शामिल करें",
            "रोज 30 मिनट जरूर टहलें",
            "चीनी की जगह गुड़ खाएं",
            "रात को जल्दी खाना खाएं",
            "तनाव से दूर रहें, मेडिटेशन करें",
            "फलों का जूस नहीं, फल खाएं",
            "ज्यादा पानी पिएं, कम बीमार पड़ें"
        ],
        alertNotNormal: "🚨 ध्यान दें! आपका BMI सामान्य सीमा (18.5–24.9) में नहीं है। कृपया डाइट और एक्सरसाइज प्लान फॉलो करें।"
    }
};

let currentLang = 'hi';
let lastAge = '', lastWeight = '', lastHeight = '';
let waterIntake = 0;
let steps = 0;
let sleep = 0;
let currentTipIndex = 0;

window.onload = function() {
    waterIntake = parseInt(localStorage.getItem('waterIntake')) || 0;
    steps = parseInt(localStorage.getItem('steps')) || 0;
    sleep = parseInt(localStorage.getItem('sleep')) || 0;
    document.getElementById('waterCount').innerHTML = waterIntake;
    document.getElementById('stepCount').innerHTML = steps;
    document.getElementById('sleepHours').innerHTML = sleep;
    displayBMIHistory();
    setLanguage('hi');
};

function saveTrackers() {
    localStorage.setItem('waterIntake', waterIntake);
    localStorage.setItem('steps', steps);
    localStorage.setItem('sleep', sleep);
}

function addWater() {
    waterIntake++;
    document.getElementById('waterCount').innerHTML = waterIntake;
    saveTrackers();
    if (waterIntake >= 8) {
        alert(translations[currentLang].tips[0]);
    }
}

function addSteps() {
    steps += 100;
    document.getElementById('stepCount').innerHTML = steps;
    saveTrackers();
    if (steps >= 10000) {
        alert(translations[currentLang].tips[1]);
    }
}

function addSleep() {
    sleep++;
    document.getElementById('sleepHours').innerHTML = sleep;
    saveTrackers();
}

function setLanguage(lang) {
    currentLang = lang;
    document.getElementById('langEn').classList.toggle('active', lang === 'en');
    document.getElementById('langHi').classList.toggle('active', lang === 'hi');
    updateStaticTexts();
    if (lastAge && lastWeight && lastHeight) {
        calculateBMI(true);
    }
}

function updateStaticTexts() {
    const t = translations[currentLang];
    document.getElementById('appTitle').innerText = t.appTitle;
    document.getElementById('appSubtitle').innerText = t.appSubtitle;
    document.getElementById('bmiCardTitle').innerText = t.bmiCardTitle;
    document.getElementById('ageLabel').innerText = t.ageLabel;
    document.getElementById('weightLabel').innerText = t.weightLabel;
    document.getElementById('heightLabel').innerText = t.heightLabel;
    document.getElementById('calcBtn').innerHTML = `<span class="material-icons icon-left">search</span> ${t.calcBtn}`;
    document.getElementById('resultHeading').innerText = t.resultHeading;
    document.getElementById('rangeTitle').innerText = t.rangeTitle;
    document.getElementById('rangeUnderweight').innerHTML = t.rangeUnderweight;
    document.getElementById('rangeNormal').innerHTML = t.rangeNormal;
    document.getElementById('rangeOverweight').innerHTML = t.rangeOverweight;
    document.getElementById('rangeObese').innerHTML = t.rangeObese;
    document.getElementById('dietTitle').innerText = t.dietTitle;
    document.getElementById('dietPlaceholder').innerText = t.dietPlaceholder;
    document.getElementById('exerciseTitle').innerText = t.exerciseTitle;
    document.getElementById('exercisePlaceholder').innerText = t.exercisePlaceholder;
    document.getElementById('timelineTitle').innerText = t.timelineTitle;
    document.getElementById('timelinePlaceholder').innerText = t.timelinePlaceholder;
    document.getElementById('trackerTitle').innerText = t.trackerTitle;
    document.getElementById('waterLabel').innerText = t.waterLabel;
    document.getElementById('waterBtn').innerText = t.waterBtn;
    document.getElementById('stepLabel').innerText = t.stepLabel;
    document.getElementById('stepBtn').innerText = t.stepBtn;
    document.getElementById('sleepLabel').innerText = t.sleepLabel;
    document.getElementById('sleepBtn').innerText = t.sleepBtn;
    document.getElementById('tipsTitle').innerText = t.tipsTitle;
    document.getElementById('tipBtn').innerText = t.tipBtn;
    document.getElementById('historyTitle').innerText = t.historyTitle;
    document.getElementById('clearHistoryBtn').innerText = t.clearHistoryBtn;
    document.getElementById('yogaTitle').innerText = t.yogaTitle;
    document.getElementById('suryaName').innerText = t.suryaName;
    document.getElementById('suryaDesc').innerText = t.suryaDesc;
    document.getElementById('pranayamName').innerText = t.pranayamName;
    document.getElementById('pranayamDesc').innerText = t.pranayamDesc;
    document.getElementById('footerText').innerText = t.footerText;
    document.getElementById('footerSubtext').innerText = t.footerSubtext;
    document.getElementById('healthTip').innerHTML = `<p>💡 ${t.tips[currentTipIndex]}</p>`;
}

function calculateBMI(skipHistory = false) {
    const age = document.getElementById('age').value;
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    if (!age || !weight || !height) {
        alert(translations[currentLang].dietPlaceholder);
        return;
    }

    lastAge = age;
    lastWeight = weight;
    lastHeight = height;

    const heightInM = height / 100;
    const bmi = (weight / (heightInM * heightInM)).toFixed(1);

    let categoryKey = '';
    let progressWidth = 0;
    let isNormal = true;

    if (bmi < 18.5) {
        categoryKey = 'underweight';
        progressWidth = 30;
        isNormal = false;
    } else if (bmi >= 18.5 && bmi < 25) {
        categoryKey = 'normal';
        progressWidth = 60;
        isNormal = true;
    } else if (bmi >= 25 && bmi < 30) {
        categoryKey = 'overweight';
        progressWidth = 80;
        isNormal = false;
    } else {
        categoryKey = 'obese';
        progressWidth = 100;
        isNormal = false;
    }

    const t = translations[currentLang];
    const category = t.bmiCategories[categoryKey];
    const advice = t.bmiAdvice[categoryKey];

    document.getElementById('bmiResult').style.display = 'block';
    document.getElementById('bmiValue').innerHTML = `BMI: ${bmi}`;
    document.getElementById('bmiCategory').innerHTML = `${t.resultHeading.split(' ')[0]} ${category}`;
    document.getElementById('bmiAdvice').innerHTML = advice;

    const progressFill = document.getElementById('bmiProgress');
    progressFill.style.width = progressWidth + '%';
    if (isNormal) {
        progressFill.classList.remove('red');
        progressFill.style.background = 'linear-gradient(90deg, #4caf50, #2e7d32)';
    } else {
        progressFill.classList.add('red');
        progressFill.style.background = 'linear-gradient(90deg, #ff5252, #d32f2f)';
        if (!skipHistory) {
            alert(t.alertNotNormal);
        }
    }

    if (!skipHistory) {
        saveBMItoHistory(bmi, category, age, weight, height);
    }

    generateDietPlan(categoryKey);
    generateExercisePlan(categoryKey);
    generateTimeline(categoryKey);
}

function saveBMItoHistory(bmi, category, age, weight, height) {
    let history = JSON.parse(localStorage.getItem('bmiHistory')) || [];
    const record = {
        date: new Date().toLocaleString(),
        bmi: bmi,
        category: category,
        age: age,
        weight: weight,
        height: height
    };
    history.unshift(record);
    if (history.length > 5) history.pop();
    localStorage.setItem('bmiHistory', JSON.stringify(history));
    displayBMIHistory();
}

function displayBMIHistory() {
    const historyContainer = document.getElementById('bmiHistory');
    let history = JSON.parse(localStorage.getItem('bmiHistory')) || [];
    if (history.length === 0) {
        historyContainer.innerHTML = `<p>${translations[currentLang].dietPlaceholder}</p>`;
        return;
    }
    let html = '';
    history.forEach(record => {
        html += `<div class="history-item">
            <strong>${record.date}</strong><br>
            BMI: ${record.bmi} (${record.category})<br>
            ${translations[currentLang].ageLabel}: ${record.age}, ${translations[currentLang].weightLabel}: ${record.weight}kg
        </div>`;
    });
    historyContainer.innerHTML = html;
}

function clearHistory() {
    if (confirm(translations[currentLang].clearHistoryBtn + '?')) {
        localStorage.removeItem('bmiHistory');
        displayBMIHistory();
    }
}

function generateDietPlan(categoryKey) {
    const t = translations[currentLang];
    const items = t.dietPlans[categoryKey] || t.dietPlans.normal;
    let html = '';
    items.forEach(item => {
        html += `<div class="diet-item"><span class="material-icons">restaurant</span>${item}</div>`;
    });
    document.getElementById('dietPlan').innerHTML = html;
}

function generateExercisePlan(categoryKey) {
    const t = translations[currentLang];
    const items = t.exercisePlans[categoryKey] || t.exercisePlans.normal;
    let html = '';
    items.forEach(item => {
        const parts = item.split(' - ');
        html += `<div class="exercise-item"><span>${parts[0]}</span><span class="exercise-time">${parts[1]}</span></div>`;
    });
    document.getElementById('exercisePlan').innerHTML = html;
}

function generateTimeline(categoryKey) {
    const t = translations[currentLang];
    const items = t.timeline[categoryKey] || t.timeline.normal;
    let html = '';
    items.forEach(item => {
        html += `<p>${item}</p>`;
    });
    html += `<p>⏰ ${t.tips[2]}</p>`;
    document.getElementById('timeline').innerHTML = html;
}

function newTip() {
    const t = translations[currentLang];
    currentTipIndex = (currentTipIndex + 1) % t.tips.length;
    document.getElementById('healthTip').innerHTML = `<p>💡 ${t.tips[currentTipIndex]}</p>`;
}

setInterval(newTip, 30000);
