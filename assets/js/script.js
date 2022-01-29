let playButton = document.getElementById('play');
let heading = document.getElementById('heading');
let questionContainer = document.getElementById('question-container');
let imageContainer = document.getElementById('image-container');
let gameContainer = document.getElementById('game-container');
let nextButton = document.getElementById('next-button');
let scoreContainer = document.getElementById('score');

playButton.addEventListener('click', playQuiz);

let pics = ['assets/images/ash.jpg',
'assets/images/holly.jpg',
'assets/images/oak.jpg',
'assets/images/sycamore.jpg'
]

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

    /// tutor code
let correct = 0; // track correct answer for each question
let options = {
text: ['Ash', 'Oak', 'Holly', 'Sycamore'], // we will loop over the options
correct_answer: 0, // this is the index number of the correct answer
};

options.text.forEach((t, i) => {
// get element with index of loop
document.getElementById(`option-${i+1}`).innerHTML = t
console.log(t)
})

const buttonsEL = document.querySelectorAll(".option-btn"); // get all buttons

// for each btn, add click listener
buttonsEL.forEach(btn =>
btn.addEventListener("click",(checkAnswer), event => console.log(event.target.innerText == options.text[options.correct_answer]))
)
/// tutor code




// check for answer
/// options[correct] === event.target.innerText

    /*options.forEach(option => {
        for (let tree in option) {
            optionBtn.textContent = `${option[tree]}`;
            console.log(`${tree}: ${option[tree]}`);
        }
    });*/



/*let image = document.getElementsByClassName('image');

nextButton.addEventListener('click', selectNext);

function selectNext() {
    
}

/*let selectedAnswer = 

let optionChosen = document.getElementsByClassName('option-btn');
optionChosen.addEventListener('click', selectAnswer);

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
] */