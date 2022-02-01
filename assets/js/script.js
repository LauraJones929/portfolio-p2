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
    let imageQuestion = document.getElementById("image");
    let button1 = document.getElementById('option-1');
    let button2 = document.getElementById('option-2');
    let button3 = document.getElementById('option-3');
    let button4 = document.getElementById('option-4');

    imageQuestion.src = questionData[0]["image-question"];
    button1.innerText = questionData[0]["options"][0];
    button2.innerText = questionData[0]["options"][1];
    button3.innerText = questionData[0]["options"][2];
    button4.innerText = questionData[0]["options"][3];

    button3.addEventListener("click", function() {
        alert("you clicked on "+questionData[0]["options"][2])
    })
})