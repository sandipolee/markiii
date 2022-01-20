// -------------------
// ---------------result page  of quiz app----------------
//---------------------- 

let questions;
fetch("./assets/json/quize.json")
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {
        console.log(typeof(data));

    });


let show_score = document.querySelector("#score");
let show_correctanswer = document.querySelector("#correctAnswer");
let show_WrongAnswer = document.querySelector("#WrongAnswer");

let show_username = document.querySelector("#user_name");

let get_score = sessionStorage.getItem("score");
let get_CA = sessionStorage.getItem("correctans_count ");
let get_WA = sessionStorage.getItem("Wrongans_count ");
let get_uname = sessionStorage.getItem("userName");

show_score.innerText = `Total score ${get_score}`;
show_correctanswer.innerText = `Total Correct Answer ${get_CA}`;
show_WrongAnswer.innerText = `Total Wrong Answer ${get_WA}`;
show_username.innerText = `name ${get_uname}`;

function restart() {
    location.href = "startquiz.html";
}