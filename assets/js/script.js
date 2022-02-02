let questionData = [
    {
        "image-question" : "assets/images/ash.jpg",
        "options" : ["Oak", "Holly", "Ash", "Sycamore"],
        "answer" : "Ash"
    },
    {
        "image-question" : "assets/images/holly.jpg",
        "options" : ["Holly", "Oak", "Sycamore", "Ash"],
        "answer" : "Holly"
    },
    {
        "image-question" : "assets/images/oak.jpg",
        "options" : ["Sycamore", "Oak", "Holly", "Ash"],
        "answer" : "Oak"
    },
    {
        "image-question" : "assets/images/sycamore.jpg",
        "options" : ["Sycamore", "Holly", "Ash", "Oak"],
        "answer" : "Sycamore"
    }
];

window.addEventListener("load", function() {

    let currentQuestion = parseInt(localStorage.getItem('location'));

    let imageQuestion = document.getElementById("image");
    let button1 = document.getElementById('option-1');
    let button2 = document.getElementById('option-2');
    let button3 = document.getElementById('option-3');
    let button4 = document.getElementById('option-4');

    imageQuestion.src = questionData[currentQuestion]["image-question"];
    button1.innerText = questionData[currentQuestion]["options"][0];
    button2.innerText = questionData[currentQuestion]["options"][1];
    button3.innerText = questionData[currentQuestion]["options"][2];
    button4.innerText = questionData[currentQuestion]["options"][3];

    button1.addEventListener("click", function() {
        if(this.textContent === questionData[currentQuestion]["answer"]) {
            console.log('You are correct!');
            this.style.backgroundColor = "green";
            currentQuestion += 1;
            localStorage.setItem('location', currentQuestion);
            window.location.reload();
        } else {
            console.log('Try again!');
            this.style.backgroundColor = "red";
        }
    })
    button2.addEventListener("click", function() {
        if(this.textContent === questionData[currentQuestion]["answer"]) {
            console.log('You are correct!');
            this.style.backgroundColor = "green";
            currentQuestion += 1;
            localStorage.setItem('location', currentQuestion);
            window.location.reload();
        } else {
            console.log('Try again!');
            this.style.backgroundColor = "red";
        }
    })
    button3.addEventListener("click", function() {
        if(this.textContent === questionData[currentQuestion]["answer"]) {
            console.log('You are correct!');
            this.style.backgroundColor = "green";
            currentQuestion += 1;
            localStorage.setItem('location', currentQuestion);
            window.location.reload();
        } else {
            console.log('Try again!');
            this.style.backgroundColor = "red";
        }
    })
    button4.addEventListener("click", function() {
        if(this.textContent === questionData[currentQuestion]["answer"]) {
            console.log('You are correct!');
            this.style.backgroundColor = "green";
            currentQuestion += 1;
            localStorage.setItem('location', currentQuestion);
            window.location.reload();
        } else {
            console.log('Try again!');
            this.style.backgroundColor = "red";
        }
    })
})