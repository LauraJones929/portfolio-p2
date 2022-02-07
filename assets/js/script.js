window.addEventListener("load", function () {
    
    let questionData = [
        {
        "image-question": "assets/images/ash.jpg",
        "options": ["Oak", "Chestnut", "Ash", "Maple"],
        "answer": "Ash"
        },
        {
        "image-question": "assets/images/holly.jpg",
        "options": ["Holly", "Oak", "Sycamore", "Ash"],
        "answer": "Holly"
        },
        {
        "image-question": "assets/images/oak.jpg",
        "options": ["Maple", "Oak", "Holly", "Ash"],
        "answer": "Oak"
        },
        {
        "image-question": "assets/images/sycamore.jpg",
        "options": ["Oak", "Holly", "Ash", "Sycamore"],
        "answer": "Sycamore"
        },
        {
        "image-question": "assets/images/birch.jpg",
        "options": ["Ash", "Sycamore", "Birch", "Holly"],
        "answer": "Birch"
        },
        {
        "image-question": "assets/images/beech.jpg",
        "options": ["Beech", "Ash", "Willow", "Oak"],
        "answer": "Beech"
        },
        {
        "image-question": "assets/images/pine.jpg",
        "options": ["Ash", "Oak", "Pine", "Birch"],
        "answer": "Pine"
        },
        {
        "image-question": "assets/images/chestnut.jpg",
        "options": ["Pine", "Birch", "Chestnut", "Sycamore"],
        "answer": "Chestnut"
        },
        {
        "image-question": "assets/images/maple.jpg",
        "options": ["Oak", "Maple", "Beech", "Pine"],
        "answer": "Maple"
        },
        {
        "image-question": "assets/images/willow.jpg",
        "options": ["Sycamore", "Chestnut", "Holly", "Willow"],
        "answer": "Willow"
        },
    ];

    // Track current index in questionData array, and track score
    let currentQuestion = 0;
    let score  = 0;

    // Get buttons
    const options = [...document.getElementsByClassName('option-btn')];

    // Start Game
    function init() {
    displayQuestion();
    }
    init();

    // Listen for button clicks and run checkAnswer
    options.forEach(btn => {
        btn.addEventListener('click', (event) => checkAnswer(event));
    });

    // Displays question by getting the image and text for each option
    function displayQuestion() {
        document.getElementById("image").src = questionData[currentQuestion]['image-question'];
        questionData[currentQuestion].options.forEach((opt, i) => {
            options[i].innerText = opt;
        });
    }

    // Checks answer
    function checkAnswer(event) {
        if (event.target.innerText === questionData[currentQuestion].answer) {
            document.getElementById("your-score").innerText = ++score;
        } else {
        }

    // Tutor support on how to iterate through questions

        // If there are more questions, display next Q after 1 second
        if (currentQuestion !== questionData.length - 1) {
            setTimeout(() => {
                currentQuestion++;
                displayQuestion();
            }, 1000);
        } else {
            // Disable buttons
            options.forEach(btn => btn.style.pointerEvents = 'none');
            endGame();
        }
    }

    // End of game
    function endGame () {
        document.getElementById('question-container').classList.add('hide');
        document.getElementById('image-container').classList.add('hide');
        document.getElementById('game-container').classList.add('hide'); 
        document.getElementById('score').classList.add('hide'); 
        document.getElementById('end-game').classList.remove('hide');
        document.getElementById('restart').classList.remove('hide');

        let result = document.getElementById('result');
    
        result.innerText = `You answered `+ parseInt(document.getElementById('your-score').innerText) + ` correct!`;
    }


    function restartGame(event) {
        window.location.reload();
        init();
    }
    let restart = document.getElementById('restart-btn');
    restart.addEventListener('click', restartGame);
});