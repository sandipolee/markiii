// -------------------
// ---------------result page  of quiz app----------------
//---------------------- 


let show_score = document.querySelector("#score");
let show_correctanswer = document.querySelector("#correctAnswer");
let show_WrongAnswer = document.querySelector("#WrongAnswer");

let show_username = document.querySelector("#user_name");

let get_score = sessionStorage.getItem("score");
let get_CA = sessionStorage.getItem("correctans_count ");
let get_WA = sessionStorage.getItem("Wrongans_count ");
let get_uname = sessionStorage.getItem("userName");
let user_answers = JSON.parse(localStorage.getItem("users_answer"));
let No_Question = sessionStorage.getItem("question_count");

show_score.innerText = `Total score ${get_score} / ${No_Question * 2} `;
let per_of_corret_ans = get_CA / No_Question * 100;
let per_of_wrong_ans = get_WA / No_Question * 100;
show_correctanswer.innerText = `Total Correct Answer  ${per_of_corret_ans} %`;
show_WrongAnswer.innerText = `Total Wrong Answer ${per_of_wrong_ans} %`;
show_username.innerText = `Name ${get_uname}`;




function restart() {
    location.href = "startquiz.html";
}


function checkAnswer() {
    fetch("./assets/json/quize.json")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            let questions = data
            for (let i = 0; i < No_Question; i++) {
                let result_area = document.getElementById("result-area");
                result_area.innerHTML = result_area.innerHTML + `<h5>${i + 1}.${questions[i]["question"]} </h5>`


                result_area.innerHTML = result_area.innerHTML + `<ul class="options col-md-4">  `;

                for (let j = 0; j < 4; j++) {
                    let correctanswer = questions[i]["correctIndex"];
                    if (user_answers[i] == correctanswer && user_answers[i] == j) {
                        result_area.innerHTML = result_area.innerHTML + `<ul class="options col-md-4"> 
                            <li class="optionQ border-green-act " id="${j}">${questions[i]["answers"][j]}   </li> `

                    } else if (user_answers[i] == j) {

                        result_area.innerHTML = result_area.innerHTML + `<ul class="options col-md-4"> <li class="optionQ activequiz" id="${j}">${questions[i]["answers"][j]}  </li>`
                    } else if (correctanswer == j) {
                        result_area.innerHTML = result_area.innerHTML + `<ul class="options col-md-4"> <li class="optionQ border-green " id="${j}">${questions[i]["answers"][j]}</li>`
                    } else {
                        result_area.innerHTML = result_area.innerHTML + `<ul class="options col-md-4"> <li class="optionQ border-danger " id="${j}">${questions[i]["answers"][j]}  </li>`
                    }
                }


            }



        });
}