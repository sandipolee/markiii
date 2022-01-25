const nextBtn = document.getElementById("next");
const questionText = document.getElementById("question-text")
const answeroptions = document.getElementById("answeroptions")
let quiz_data_get = sessionStorage.getItem("quizdata");
let quiz_data = "./assets/json/quizdata/" + quiz_data_get;

let currentQuestion = 0;
let score = 0;
let correctans_count = 0;
let Wrongans_count = 0;

let users_answers = [];

// for number of questions selected by use

let No_Question = sessionStorage.getItem("question_count");

let user_Name = sessionStorage.getItem("userName");
let h2 = document.getElementById("welcome-name");
h2.innerHTML = `Welcome  ${user_Name} `;



function show(Ndata) {

    let question_area = document.querySelector("#questionArea");
    let questions = Ndata;
    document.querySelector("#question-count").innerHTML = ` ${currentQuestion +1} / ${No_Question}`;
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
//  

fetchData()

function fetchData() {

    fetch(quiz_data)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            show(data);
        });
}





// ---------- next function-----------------


function next() {
    fetch(quiz_data)
        .then(function(response) {
            return response.json();

        })
        .then(function(data) {
            let questions = data;

            let correctanswer = questions[currentQuestion]["correctIndex"];
            currentQuestion++;

            let userAnswer = document.querySelector(".activequiz").id;

            document.querySelector("#question-count").innerHTML = ` ${currentQuestion +1} / ${No_Question}`;

            users_answers.push(userAnswer)
            if (correctanswer == userAnswer) {
                score = score + 2;
                correctans_count++;

            } else Wrongans_count++;

            if (currentQuestion == No_Question) {

                let workarea = document.querySelector("#quiz");
                document.querySelector("#nextbtn").classList.add("disabled")
                workarea.innerHTML = workarea.innerHTML + `<button class="btn" onclick="submit()">sumbit</button>`;

            } else {


                fetchData();

            }
        });


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


    let users_answersP = JSON.stringify(users_answers);
    localStorage.setItem("users_answer", users_answersP);
    location.href = "result.html"

}