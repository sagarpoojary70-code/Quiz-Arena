
// ==========================================
// QUIZ QUESTION BANK - 30 QUESTIONS
// ==========================================

const questions = [

    // SCIENCE - 3 EASY, 2 MEDIUM, 1 HARD

    {
        category: "Science",
        difficulty: "Easy",
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        answer: 1,
        explanation: "Mars appears red because of iron oxide."
    },
    {
        category: "Science",
        difficulty: "Easy",
        question: "What gas do plants absorb?",
        options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
        answer: 2,
        explanation: "Plants absorb carbon dioxide during photosynthesis."
    },
    {
        category: "Science",
        difficulty: "Easy",
        question: "How many bones are there in an adult human body?",
        options: ["206", "201", "210", "196"],
        answer: 0,
        explanation: "An adult human body typically has 206 bones."
    },
    {
        category: "Science",
        difficulty: "Medium",
        question: "What is the chemical symbol for Gold?",
        options: ["Ag", "Au", "Fe", "Go"],
        answer: 1,
        explanation: "Au comes from the Latin word Aurum."
    },
    {
        category: "Science",
        difficulty: "Medium",
        question: "What is the powerhouse of the cell?",
        options: ["Nucleus", "Ribosome", "Mitochondria", "Cytoplasm"],
        answer: 2,
        explanation: "Mitochondria produce most of the cell's usable energy."
    },
    {
        category: "Science",
        difficulty: "Hard",
        question: "What is the approximate speed of light in vacuum?",
        options: ["150,000 km/s", "300,000 km/s", "450,000 km/s", "600,000 km/s"],
        answer: 1,
        explanation: "Light travels at approximately 300,000 km per second."
    },

    // TECHNOLOGY - 3 EASY, 2 MEDIUM, 1 HARD

    {
        category: "Technology",
        difficulty: "Easy",
        question: "What does CPU stand for?",
        options: ["Central Processing Unit", "Computer Personal Utility", "Core Program Unit", "Central Power Utility"],
        answer: 0,
        explanation: "CPU means Central Processing Unit."
    },
    {
        category: "Technology",
        difficulty: "Easy",
        question: "Which language is used to structure web pages?",
        options: ["Python", "HTML", "C++", "SQL"],
        answer: 1,
        explanation: "HTML provides the structure of web pages."
    },
    {
        category: "Technology",
        difficulty: "Easy",
        question: "Which device is used to move the cursor?",
        options: ["Keyboard", "Monitor", "Mouse", "Printer"],
        answer: 2,
        explanation: "A mouse is used to control the cursor."
    },
    {
        category: "Technology",
        difficulty: "Medium",
        question: "What does HTTP stand for?",
        options: ["Hypertext Transfer Protocol", "High Transfer Text Program", "Hyperlink Terminal Transfer Process", "Host Text Transmission Protocol"],
        answer: 0,
        explanation: "HTTP means Hypertext Transfer Protocol."
    },
    {
        category: "Technology",
        difficulty: "Medium",
        question: "Which data structure follows FIFO?",
        options: ["Stack", "Queue", "Tree", "Graph"],
        answer: 1,
        explanation: "A queue follows First In, First Out."
    },
    {
        category: "Technology",
        difficulty: "Hard",
        question: "Which algorithm has average time complexity O(n log n)?",
        options: ["Bubble Sort", "Selection Sort", "Merge Sort", "Linear Search"],
        answer: 2,
        explanation: "Merge Sort has O(n log n) time complexity."
    },

    // HISTORY - 3 EASY, 2 MEDIUM, 1 HARD

    {
        category: "History",
        difficulty: "Easy",
        question: "Who was the first President of the USA?",
        options: ["Abraham Lincoln", "George Washington", "John Adams", "Thomas Jefferson"],
        answer: 1,
        explanation: "George Washington was the first US president."
    },
    {
        category: "History",
        difficulty: "Easy",
        question: "In which year did World War II end?",
        options: ["1942", "1945", "1948", "1950"],
        answer: 1,
        explanation: "World War II ended in 1945."
    },
    {
        category: "History",
        difficulty: "Easy",
        question: "Who was the first person to walk on the Moon?",
        options: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "Michael Collins"],
        answer: 1,
        explanation: "Neil Armstrong walked on the Moon in 1969."
    },
    {
        category: "History",
        difficulty: "Medium",
        question: "Which ancient civilization built the pyramids at Giza?",
        options: ["Romans", "Greeks", "Egyptians", "Persians"],
        answer: 2,
        explanation: "The ancient Egyptians built the pyramids at Giza."
    },
    {
        category: "History",
        difficulty: "Medium",
        question: "Who discovered the sea route to India from Europe?",
        options: ["Christopher Columbus", "Vasco da Gama", "Marco Polo", "Ferdinand Magellan"],
        answer: 1,
        explanation: "Vasco da Gama reached India by sea in 1498."
    },
    {
        category: "History",
        difficulty: "Hard",
        question: "In which year was the Magna Carta sealed?",
        options: ["1066", "1215", "1492", "1648"],
        answer: 1,
        explanation: "King John sealed the Magna Carta in 1215."
    },

    // GEOGRAPHY - 3 EASY, 2 MEDIUM, 1 HARD

    {
        category: "Geography",
        difficulty: "Easy",
        question: "What is the largest ocean?",
        options: ["Atlantic", "Indian", "Arctic", "Pacific"],
        answer: 3,
        explanation: "The Pacific is the largest ocean."
    },
    {
        category: "Geography",
        difficulty: "Easy",
        question: "What is the capital of Japan?",
        options: ["Kyoto", "Tokyo", "Osaka", "Hiroshima"],
        answer: 1,
        explanation: "Tokyo is the capital of Japan."
    },
    {
        category: "Geography",
        difficulty: "Easy",
        question: "Which is the largest continent?",
        options: ["Africa", "Europe", "Asia", "Australia"],
        answer: 2,
        explanation: "Asia is the largest continent."
    },
    {
        category: "Geography",
        difficulty: "Medium",
        question: "Which continent contains the Sahara Desert?",
        options: ["Asia", "Africa", "Australia", "South America"],
        answer: 1,
        explanation: "The Sahara Desert is located in northern Africa."
    },
    {
        category: "Geography",
        difficulty: "Medium",
        question: "Which country has the largest land area?",
        options: ["Canada", "China", "Russia", "USA"],
        answer: 2,
        explanation: "Russia is the largest country by land area."
    },
    {
        category: "Geography",
        difficulty: "Hard",
        question: "Which strait separates Asia and North America?",
        options: ["Strait of Gibraltar", "Bering Strait", "Malacca Strait", "Hormuz Strait"],
        answer: 1,
        explanation: "The Bering Strait separates Russia and Alaska."
    },

    // MATHEMATICS - 3 EASY, 2 MEDIUM, 1 HARD

    {
        category: "Mathematics",
        difficulty: "Easy",
        question: "What is 12 × 8?",
        options: ["86", "94", "96", "108"],
        answer: 2,
        explanation: "12 multiplied by 8 equals 96."
    },
    {
        category: "Mathematics",
        difficulty: "Easy",
        question: "What is the square root of 144?",
        options: ["10", "11", "12", "14"],
        answer: 2,
        explanation: "12 multiplied by 12 equals 144."
    },
    {
        category: "Mathematics",
        difficulty: "Easy",
        question: "What is 15 + 25?",
        options: ["35", "40", "45", "50"],
        answer: 1,
        explanation: "15 + 25 = 40."
    },
    {
        category: "Mathematics",
        difficulty: "Medium",
        question: "What is 25% of 200?",
        options: ["25", "40", "50", "75"],
        answer: 2,
        explanation: "25% of 200 is 50."
    },
    {
        category: "Mathematics",
        difficulty: "Medium",
        question: "What is the value of 7 squared?",
        options: ["14", "42", "49", "56"],
        answer: 2,
        explanation: "7 multiplied by 7 equals 49."
    },
    {
        category: "Mathematics",
        difficulty: "Hard",
        question: "What is the derivative of x²?",
        options: ["x", "2x", "2", "x³"],
        answer: 1,
        explanation: "Using the power rule, the derivative is 2x."
    }

];


// ==========================================
// GAME VARIABLES
// ==========================================

let quizQuestions = [];
let currentQuestion = 0;
let score = 0;

let selectedCategory = "All";
let selectedDifficulty = "All";

let userAnswers = [];

let timeLeft = 20;
let timer = null;

let answered = false;
let soundEnabled = true;


// ==========================================
// HTML ELEMENTS
// ==========================================

const home = document.getElementById("home");
const quiz = document.getElementById("quiz");
const result = document.getElementById("result");

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");


// ==========================================
// CATEGORY FILTER
// ==========================================

document.querySelectorAll("#categories button").forEach(button => {

    button.addEventListener("click", () => {

        selectedCategory = button.dataset.cat;

        document.querySelectorAll("#categories button")
            .forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        updateQuestionCount();

    });

});


// ==========================================
// DIFFICULTY FILTER
// ==========================================

document.querySelectorAll("#difficulties button").forEach(button => {

    button.addEventListener("click", () => {

        selectedDifficulty = button.dataset.diff;

        document.querySelectorAll("#difficulties button")
            .forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        updateQuestionCount();

    });

});


// ==========================================
// FILTER QUESTIONS
// ==========================================

function getFilteredQuestions() {

    return questions.filter(q => {

        const categoryMatch =
            selectedCategory === "All" ||
            q.category === selectedCategory;

        const difficultyMatch =
            selectedDifficulty === "All" ||
            q.difficulty === selectedDifficulty;

        return categoryMatch && difficultyMatch;

    });

}


// ==========================================
// UPDATE QUESTION COUNT
// ==========================================

function updateQuestionCount() {

    document.getElementById("questionCount").textContent =
        getFilteredQuestions().length;

}


// ==========================================
// SOUND EFFECT
// ==========================================

function playSound(correct) {

    if (!soundEnabled) return;

    const AudioContextClass =
        window.AudioContext || window.webkitAudioContext;

    if (!AudioContextClass) return;

    try {

        const audio = new AudioContextClass();
        const oscillator = audio.createOscillator();
        const gain = audio.createGain();

        oscillator.connect(gain);
        gain.connect(audio.destination);

        oscillator.frequency.value = correct ? 660 : 210;

        gain.gain.setValueAtTime(0.08, audio.currentTime);

        gain.gain.exponentialRampToValueAtTime(
            0.001,
            audio.currentTime + 0.2
        );

        oscillator.start();
        oscillator.stop(audio.currentTime + 0.2);

        oscillator.onended = () => audio.close();

    } catch (error) {

        console.log("Sound is unavailable.");

    }

}


// ==========================================
// START QUIZ
// ==========================================

document.getElementById("startBtn").addEventListener("click", startQuiz);

function startQuiz() {

    clearInterval(timer);

    quizQuestions = getFilteredQuestions();

    if (quizQuestions.length === 0) {

        alert("No questions available for this selection!");

        return;

    }

    if (document.getElementById("shuffle").checked) {

        for (let i = quizQuestions.length - 1; i > 0; i--) {

            const j = Math.floor(Math.random() * (i + 1));

            [quizQuestions[i], quizQuestions[j]] =
                [quizQuestions[j], quizQuestions[i]];

        }

    }

    currentQuestion = 0;
    score = 0;
    userAnswers = [];
    answered = false;

    home.classList.add("hidden");
    result.classList.add("hidden");
    quiz.classList.remove("hidden");

    showQuestion();

}

// ==========================================
// DISPLAY QUESTION
// ==========================================

function showQuestion() {

    clearInterval(timer);

    timeLeft = 20;
    answered = false;

    const q = quizQuestions[currentQuestion];

    document.getElementById("questionNumber").textContent =
        `Question ${currentQuestion + 1} of ${quizQuestions.length}`;

    document.getElementById("difficulty").textContent =
        q.difficulty;

    document.getElementById("categoryName").textContent =
        q.category;

    document.getElementById("progressBar").style.width =
        ((currentQuestion + 1) / quizQuestions.length * 100) + "%";

    questionElement.textContent = q.question;

    answersElement.innerHTML = "";

    document.getElementById("feedback").classList.add("hidden");

    nextBtn.disabled = true;

    nextBtn.textContent =
        currentQuestion === quizQuestions.length - 1
            ? "See Results →"
            : "Next Question →";

    q.options.forEach((option, index) => {

        const button = document.createElement("button");

        button.className = "answer";

        button.textContent =
            String.fromCharCode(65 + index) + ". " + option;

        button.addEventListener("click", () => {
            selectAnswer(index);
        });

        answersElement.appendChild(button);

    });

    updateScore();
    startTimer();

}


// ==========================================
// TIMER
// ==========================================

function startTimer() {

    updateTimer();

    timer = setInterval(() => {

        timeLeft--;

        updateTimer();

        if (timeLeft <= 0) {

            clearInterval(timer);

            selectAnswer(-1, true);

        }

    }, 1000);

}


// ==========================================
// UPDATE TIMER DISPLAY
// ==========================================

function updateTimer() {

    document.getElementById("timer").textContent =
        "⏱ " + timeLeft + "s";

    const timerBar = document.getElementById("timerBar");

    timerBar.style.width =
        (timeLeft / 20 * 100) + "%";

    timerBar.style.background =
        timeLeft <= 5 ? "#dc5555" : "#16a36a";

}


// ==========================================
// SELECT ANSWER
// ==========================================

function selectAnswer(selected, timeout = false) {

    if (answered) return;

    answered = true;

    clearInterval(timer);

    const q = quizQuestions[currentQuestion];

    const correct = selected === q.answer;

    if (correct) {

        score++;

        playSound(true);

    } else {

        playSound(false);

    }

    userAnswers.push({

        selected: selected,
        correct: q.answer,
        timeout: timeout

    });

    const buttons = answersElement.children;

    Array.from(buttons).forEach((button, index) => {

        button.disabled = true;

        if (index === q.answer) {
            button.classList.add("correct");
        }

        if (index === selected && !correct) {
            button.classList.add("wrong");
        }

    });

    const feedback = document.getElementById("feedback");

    feedback.classList.remove("hidden");

    feedback.textContent = timeout
        ? "⌛ Time is up! Correct answer: " +
          q.options[q.answer] + ". " + q.explanation

        : correct
        ? "✓ Correct! " + q.explanation

        : "✕ Incorrect! Correct answer: " +
          q.options[q.answer] + ". " + q.explanation;

    updateScore();

    nextBtn.disabled = false;

}


// ==========================================
// UPDATE SCORE
// ==========================================

function updateScore() {

    document.getElementById("liveScore").textContent =
        "Score: " + score;

}


// ==========================================
// NEXT QUESTION
// ==========================================

nextBtn.addEventListener("click", () => {

    if (!answered) return;

    if (currentQuestion < quizQuestions.length - 1) {

        currentQuestion++;

        showQuestion();

    } else {

        showResults();

    }

});


// ==========================================
// SHOW FINAL RESULTS
// ==========================================

function showResults() {

    clearInterval(timer);

    quiz.classList.add("hidden");

    result.classList.remove("hidden");

    const total = quizQuestions.length;

    const correct = userAnswers.filter(
        a => a.selected === a.correct
    ).length;

    const timeoutCount = userAnswers.filter(
        a => a.timeout
    ).length;

    const wrong = total - correct - timeoutCount;

    const percentage = Math.round(
        (correct / total) * 100
    );

    document.getElementById("percentage").textContent =
        percentage + "%";

    document.getElementById("correctCount").textContent =
        correct;

    document.getElementById("wrongCount").textContent =
        wrong;

    document.getElementById("timeoutCount").textContent =
        timeoutCount;

    document.getElementById("trophy").textContent =
        percentage >= 80 ? "🏆" :
        percentage >= 50 ? "🎖️" : "💪";

    document.getElementById("resultTitle").textContent =
        percentage >= 80 ? "Excellent Work!" :
        percentage >= 50 ? "Good Effort!" :
        "Keep Practicing!";

    document.getElementById("resultMessage").textContent =
        `You answered ${correct} out of ${total} questions correctly.`;

    showReview();

}


// ==========================================
// ANSWER REVIEW
// ==========================================

function showReview() {

    const review = document.getElementById("review");

    review.innerHTML = "";

    quizQuestions.forEach((q, index) => {

        const answer = userAnswers[index];

        const isCorrect =
            answer.selected === answer.correct;

        const div = document.createElement("div");

        div.className = "review-item";

        const title = document.createElement("h4");

        title.textContent =
            `${index + 1}. ${q.question}`;

        const status = document.createElement("strong");

        status.className =
            isCorrect ? "correct-text" : "wrong-text";

        status.textContent =
            isCorrect
                ? "✓ Correct"
                : answer.timeout
                    ? "⌛ Timed out"
                    : "✕ Incorrect";

        const detail = document.createElement("p");

        detail.textContent =
            "Your answer: " +
            (answer.selected < 0
                ? "No answer"
                : q.options[answer.selected]) +
            " | Correct answer: " +
            q.options[q.answer];

        const explanation = document.createElement("p");

        explanation.textContent = q.explanation;

        div.append(
            title,
            status,
            detail,
            explanation
        );

        review.appendChild(div);

    });

}


// ==========================================
// RETRY QUIZ
// ==========================================

document.getElementById("retryBtn").addEventListener("click", startQuiz);


// ==========================================
// HOME BUTTON
// ==========================================

document.getElementById("homeBtn").addEventListener("click", () => {

    clearInterval(timer);

    result.classList.add("hidden");
    quiz.classList.add("hidden");

    home.classList.remove("hidden");

    updateQuestionCount();

});


// ==========================================
// SOUND BUTTON
// ==========================================

document.getElementById("soundBtn").addEventListener("click", () => {

    soundEnabled = !soundEnabled;

    document.getElementById("soundBtn").textContent =
        soundEnabled ? "🔊 Sound on" : "🔇 Sound off";

});


// ==========================================
// INITIALIZE QUIZ
// ==========================================

updateQuestionCount();
