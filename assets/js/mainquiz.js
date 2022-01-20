function show() {
    let user_Name = sessionStorage.getItem("userName");
    let h2 = document.getElementById("welcome-name");
    h2.innerText = `Welcome sandip  ${user_Name}`;

}
show();