function addListElement(text){
    let li = document.createElement("li");
    li.innerHTML = text;
    document.getElementById("thelist").appendChild(li);
    return li;
}

function getList(){
    // make a call to /list, parse result JSON and invoke addListElement() for every item.
}

function addToList(){
    let text = document.getElementById("text").value;
    if (text.length > 0){
        // add element to DOM
        let li = addListElement(text);
        // mark element as currently saving
        li.classList.add("saving");
        
        var xhr = new XMLHttpRequest();
        
        /* register an embedded function as the handler */
        xhr.onreadystatechange = function () {
            /* readyState = 4 means that the response has been completed
             * status = 200 indicates that the request was successfully completed */
            if (xhr.readyState == 4 && xhr.status == 200) {
                // saved successfully. Remove class
                li.classList.remove("saving");
            }
        };

        /* send the request using POST */
        xhr.open("POST", "/add", true);
        /* To POST data like an HTML form, add an HTTP header */
        xhr.setRequestHeader("Content-type", "application/json");
        /* text goes into request body as json */
        xhr.send(JSON.stringify({text: text}));

    }
}