function fetchData() {
    fetch("./assets/json/alldata.json")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data.quotes);
            prinrthis(data.quotes);

        });
}


fetchData();




function prinrthis(dataQ) {
    const ul = document.getElementById('newa');
    ul.innerHTML = "";
    ul.innerHTML += `<p>${dataQ.length}</p>`;
    for (let i = 0; dataQ.length; i++) {

        ul.innerHTML += `<div>
        <p class="text-info" >${i+1}</p>
        <p >${dataQ[i]['quote']}</p>
        <p class="text-success">${dataQ[i]['author']}</p>
        <hr>
         </div>`
    }


}

function tag(tags) {

    if (tags === "all") {
        fetchData();
    } else {
        fetch("./assets/json/alldata.json")
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {

                tagprint(tags, data.quotes);

            });
    }
}



function tagprint(tag, dataT) {
    const ul = document.getElementById('newa');
    ul.innerHTML = "";
    ul.innerHTML += `<p>${tag}</p>`;
    ul.innerHTML += `<p>${dataT[0]['tags'].length}</p>`;

    for (let p = 0; dataT.length; p++) {
        for (let j = 0; j < dataT[p]['tags'].length; j++) {
            if (tag === dataT[p]['tags'][j]) {
                ul.innerHTML += `<div>
                <p class="text-info" >${p+1}</p>
                <p >${dataT[p]['quote']}</p>
                <p class="text-success">${dataT[p]['author']}</p>
                <hr>
                </div>`
            }
        }

    }


}