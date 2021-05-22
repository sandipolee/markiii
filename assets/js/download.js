function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const ul = document.getElementById('newa');
// const url = 'http://quotes.rest/quote/random?language=en&limit=1';

// fetch(url)
//     .then((resp) => resp.json())
//     .then(function(data) {
//         let authors = data.results;
//         console.log(authors);
//         return authors.map(function(author) {
//             let li = createNode('li');
//             let img = createNode('p');
//             let span = createNode('span');
//             img.innerHTML = author.contents.quotes.quote;
//             span.innerHTML = author.contents.quotes.author;
//             append(li, img);
//             append(li, span);
//             append(ul, li);
//         })
//     })
//     .catch(function(error) {
//         console.log(error);
//     });


mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

let n = 0;

fetch("https://type.fit/api/quotes")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        prinrthis(data)
    });



function next(vdata) {

    n = n + 10;

    fetch("https://type.fit/api/quotes")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log("next");
            prinrthis(data)
        });
    topFunction()


}

function pre(pdata) {
    n = n - 10;
    fetch("https://type.fit/api/quotes")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {

            prinrthis(data)
        });
    topFunction()
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