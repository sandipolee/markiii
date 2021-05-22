// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

let n = 0;
check()

function check() {
    if (n === 0) {
        document.getElementById("pre").setAttribute("class", "btn btn-primary col-md-2 m-auto  mr-auto ml-auto mt-3 disabled")
    } else {
        document.getElementById("pre").setAttribute("class", "btn btn-primary col-md-2 m-auto mr-auto ml-auto mt-3 ")
    }
}


function fetchData() {
    fetch("https://type.fit/api/quotes")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            prinrthis(data)
        });
}


fetchData()

function next(vdata) {

    n = n + 10;

    fetchData()
    topFunction()
    check()

}

function pre(pdata) {
    n = n - 10;
    fetchData()
    topFunction()
    check()
}

function prinrthis(dataQ) {
    const ul = document.getElementById('newa');
    ul.innerHTML = "";
    ul.innerHTML += `<p>${dataQ.length}</p>`;
    for (let i = n; i < n + 10; i++) {

        ul.innerHTML += `<div>
        <p class="text-info" >${i+1}</p>
        <p >${dataQ[i]['text']}</p>
        <p class="text-success">${dataQ[i]['author']}</p>
        <hr>
         </div>`
    }


}