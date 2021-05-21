fetch("assets/json/quotes.json")
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {
        quotes(data);
    })

function quotes(qdata) {
    let quotesv = qdata['quotes'];
    let fealdtext = document.getElementById('row-box');
    for (let i = 0; i < quotesv.length; i++) {
        fealdtext.innerHTML += `<div onclick="copyquote(` + i + `)" class="h-post card p-3 mt-4 col-md-5 ">
        <h5 >` + quotesv[i]['quote'] + `</h5>

        <p class="text-info">` + quotesv[i]['author'] + `</p>
    </div>`
    }
}

//  --------------------------------------------
//       ******** copy function ******
// -----------------------------------------------

function copyquote(data) {

    data.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Alert the copied text */
    alert("Copied ");
}