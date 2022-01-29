let playButton = document.getElementById('play');
let heading = document.getElementById('heading');
let questionContainer = document.getElementById('question-container');
let imageContainer = document.getElementById('image-container');
let gameContainer = document.getElementById('game-container');
let nextButton = document.getElementById('next-button');
let scoreContainer = document.getElementById('score');

playButton.addEventListener('click', playQuiz);

function playQuiz() {
    console.log("Started");
    playButton.classList.add('hide');
    heading.classList.add('hide');
    questionContainer.classList.remove('hide');
    imageContainer.classList.remove('hide');
    gameContainer.classList.remove('hide');
    nextButton.classList.remove('hide');
    scoreContainer.classList.remove('hide');
}

/*let image = document.getElementsByClassName('image');

nextButton.addEventListener('click', selectNext);*/

function selectNext() {
    
}

function selectAnswer() {

}

let questions = [
    {
        image: 'assets/images/ash.jpg',
        options: [
            {text: 'Ash'},
            {text: 'Oak'},
            {text: 'Sycamore'},
            {text: 'Holly'}
        ]
    }
]

for (let correctAnswer = 0; correctAnswer < questions.length; correctAnswer++) {
    console.log(questions.options.text[i]);
}

/*let images = ["assets/images/birch.jpg",
"assets/images/holly.jpg",
"assets/images/oak.jpg",
"assets/images/sycamore.jpg"];

let currentImage = 0;

function selectNext() {
    currentImage += 1;

    //loop back to the first image
    if(currentImage >= images.length) {
        currentImage = 0;
    }

    document.getElementById("image").src = images[currentImage];
}*/