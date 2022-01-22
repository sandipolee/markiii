const nextBtn = document.getElementById("next");
const questionText = document.getElementById("question-text")
const answeroptions = document.getElementById("answeroptions")

let currentQuestion = 0;
let score = 0;
let correctans_count = 0;
let Wrongans_count = 0;

let questionse = [{
        question: "Bank of England  कहिले स्थापना भएको हो ?",
        answers: [
            "1668 AD",
            "1632 AD",
            "1407 AD",
            "1694 AD"
        ],
        correctIndex: 3
    },
    {
        question: "How hot is the surface of the sun?",
        answers: [
            "1,233 K",
            "5,778 K",
            "12,130 K",
            "101,300 K"
        ],
        correctIndex: 3
    },
    {
        question: "Who are the actors in The Internship?",
        answers: [
            "Ben Stiller, Jonah Hill",
            "Courteney Cox, Matt LeBlanc",
            "Kaley Cuoco, Jim Parsons",
            "Vince Vaughn, Owen Wilson"
        ],
        correctIndex: 3
    },
    {
        question: "What is the capital of Spain?",
        answers: [
            "Berlin",
            "Buenos Aires",
            "Madrid",
            "San Juan"
        ],
        correctIndex: 2
    }
]



// --------- start button----------



function startquiz() {

    let userName = document.getElementById("user-name").value;
    if (userName == "") {

        let user_Name_area = document.getElementById("user-name");
        user_Name_area.classList.remove("color-quiz")
        user_Name_area.classList.add("color-missing")
        toast();

    } else {
        sessionStorage.setItem("userName", userName);
        location.href = "quiz.html"
    }



}
// toast function


function toast() {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function() { x.className = x.className.replace("show", ""); }, 3000);
}




let user_Name = sessionStorage.getItem("userName");
let h2 = document.getElementById("welcome-name");
h2.innerHTML = `Welcome  ${user_Name} `;


function show(Ndata) {
    let question_area = document.querySelector("#questionArea");
    let questions = Ndata;
    console.log(questions.length)
    question_area.innerHTML = `<h5>${currentQuestion + 1}. ${questions[currentQuestion]["question"]} </h5>

    <ul class="options col-md-4">
    <li class="optionQ" id="0">${questions[currentQuestion]["answers"][0]} </li>
    <li class="optionQ" id="1">${questions[currentQuestion]["answers"][1]} </li>
    <li class="optionQ" id="2">${questions[currentQuestion]["answers"][2]} </li>
    <li class="optionQ" id="3">${questions[currentQuestion]["answers"][3]} </li>
    </ul>
    `;

    toogleclick();
}
// document.querySelector("#question-count").innerHTML = ` ${currentQuestion + 1} / ${questions.length}`;
fetchData()

function fetchData() {
    fetch("./assets/json/quize.json")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log("going ")
            show(data);
        });
}



function next() {


    console.log(currentQuestion);
    let correctanswer = questions[currentQuestion]["correctIndex"];
    currentQuestion++;
    let userAnswer = document.querySelector(".activequiz").id;
    console.log(userAnswer)
    document.querySelector("#question-count").innerHTML = ` ${currentQuestion +1} / ${questions.length}`;
    if (correctanswer == userAnswer) {
        score = score + 2;
        correctans_count++;


    } else Wrongans_count++;


    if (currentQuestion == questions.length) {
        let workarea = document.querySelector("#quiz");

        document.querySelector("#nextbtn").classList.add("disabled")

        workarea.innerHTML = workarea.innerHTML + `<button class="btn" onclick="submit()">sumbit</button>`;

    } else show();

}

function toogleclick() {
    let optionQ = document.querySelectorAll(".optionQ");
    for (let i = 0; i < optionQ.length; i++) {
        optionQ[i].onclick = function() {
            for (let j = 0; j < optionQ.length; j++) {
                if (optionQ[j].classList.contains("activequiz")) {
                    optionQ[j].classList.remove("activequiz");
                }
            }
            optionQ[i].classList.add("activequiz");
        }

    }

}

function submit() {
    sessionStorage.setItem("score", score);
    sessionStorage.setItem("correctans_count ", correctans_count);
    sessionStorage.setItem("Wrongans_count ", Wrongans_count);
    location.href = "result.html"
}