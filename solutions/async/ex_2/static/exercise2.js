function getResponse() {
    waiting();

    let data = "pw=" + document.getElementById("pw").value;
    fetch("/get_pw", {
        method: "POST",
        headers: {
            "Content-type": "application/x-www-form-urlencoded",
        },
        data: data,
    })
    .then(function(response){
        if (response.status == 200){
            return response.text();
        }
        return "";
    })
    .then(callback);
}

function callback(result){
    document.getElementById("status").innerHTML = "MD5: " + result;
            /* show button */
    document.getElementById("submit").style.display = "block";
}

function waiting(){
    /* display loading bar */
    document.getElementById("status").innerHTML = "<img src='/static/loading.gif' />";
    /* hide button */
    document.getElementById("submit").style.display = "none";
}