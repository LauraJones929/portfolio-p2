let question = [{
    id: "q-1",
    imgFile: "assets/images/ash.jpg",
    a: [{ text: "Ash", isCorrect: false },
        { text: "Oak", isCorrect: true },
        { text: "Sycamore", isCorrect: false },
        { text: "Holly", isCorrect: false }
    ]},
    {id: "q-2",
    imgFile: "assets/images/holly.jpg",
    a: [{ text: "Oak", isCorrect: false },
        { text: "Sycamore", isCorrect: false },
        { text: "Holly", isCorrect: true },
        { text: "Birch", isCorrect: false }
        ]},
    {id: "q-3",
    imgFile: "assets/images/birch.jpg",
    a: [{ text: "Oak", isCorrect: false },
        { text: "Sycamore", isCorrect: false },
        { text: "Holly", isCorrect: false },
        { text: "Birch", isCorrect: true }
        ]},
    {id: "q-4",
    imgFile: "assets/images/sycamore.jpg",
    a: [{ text: "Sycamore", isCorrect: true },
        { text: "Birch", isCorrect: false },
        { text: "Ash", isCorrect: false },
        { text: "Oak", isCorrect: false }
        ]},
    {id: "q-5",
    imgFile: "assets/images/ash.jpg",
    a: [{ text: "Holly", isCorrect: false },
        { text: "Oak", isCorrect: false },
        { text: "Birch", isCorrect: false },
        { text: "Ash", isCorrect: true }
        ]},
]

let startQuiz = true;
  
function iterate(id) {

    // Getting the image for the question
    let image = document.getElementById("image");

    // Setting the question image
    image.innerText = question[id].imgFile;

    // Getting the options
    let opt1 = document.getElementById('option-1');
    let opt2 = document.getElementById('option-2');
    let opt3 = document.getElementById('option-3');
    let opt4 = document.getElementById('option-4');

    // Getting text for each option
    opt1.innerText = question[id].a[0].text;
    opt2.innerText = question[id].a[1].text;
    opt3.innerText = question[id].a[2].text;
    opt4.innerText = question[id].a[3].text;

    // Providing the true or false value to the options
    opt1.value = question[id].a[0].isCorrect;
    opt2.value = question[id].a[1].isCorrect;
    opt3.value = question[id].a[2].isCorrect;
    opt4.value = question[id].a[3].isCorrect;

    // Getting each option button
    let button = document.getElementsByClassName("option-btn");
  
    // Render if correct or incorrect
    function answered(event) {
        if (button == "true") {
            console.log("correct");
        } else {
            console.log("incorrect");
        }
    }
    answered.addEventListener('click', button);
}

if (startQuiz) {
    iterate("q-1");
}

/*function startGame() {

}

function optionSelected() {

}

function addScore() {

}

function questionOne() {

}

function questionTwo() {

}

function questionThree() {

}

function questionFour() {

}

function questionFive() {

}

*/