let questionData = [
    {
        "image-question": "assets/images/ash.jpg",
        "options": ["Oak", "Holly", "Ash", "Sycamore"],
        "answer": "Ash"
    },
    {
        "image-question": "assets/images/holly.jpg",
        "options": ["Holly", "Oak", "Sycamore", "Ash"],
        "answer": "Holly"
    },
    {
        "image-question": "assets/images/oak.jpg",
        "options": ["Sycamore", "Oak", "Holly", "Ash"],
        "answer": "Oak"
    },
    {
        "image-question": "assets/images/sycamore.jpg",
        "options": ["Oak", "Holly", "Ash", "Sycamore"],
        "answer": "Sycamore"
    },
];


// Track current index in questionData array, and track score
let currentQuestion = 0;
let score  = 0;

// Get buttons
const options = [...document.getElementsByClassName('option-btn')];

// Start Game
function init() {
    displayQuestion()
};
init();

// Listen for button clicks and run checkAnswer
options.forEach(btn => {
    btn.addEventListener('click', (event) => checkAnswer(event))
});

// Displays question by getting the image and text for each option
function displayQuestion() {
    document.getElementById("image").src = questionData[currentQuestion]['image-question'];
    questionData[currentQuestion].options.forEach((opt, i) => {
        options[i].innerText = opt;
    });
};

// Checks answer
function checkAnswer(event) {
    if (event.target.innerText === questionData[currentQuestion].answer) {
        document.getElementById("your-score").innerText = ++score;
    } else {
    }

    // If there are more questions, display next Q after 1 second
    if (currentQuestion !== questionData.length - 1) {
        setTimeout(() => {
            currentQuestion++;
            displayQuestion();
        }, 1000);
    } else {
        // Disable buttons
        options.forEach(btn => btn.style.pointerEvents = 'none')

        // TODO: tally score etc..
    }
};