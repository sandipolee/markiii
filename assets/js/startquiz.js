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
    let select = document.getElementById("option-size");
    let Question_count = select.options["selectedIndex"];
    let Question_count_value = select.options[Question_count].value;
    sessionStorage.setItem("question_count", Question_count_value);

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