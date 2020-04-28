function addListElement(text){
    let li = document.createElement("li");
    li.innerHTML = text;
    document.getElementById("thelist").appendChild(li);
    return li;
}

async function getList(){
    // make a call to /list, parse result JSON and invoke addListElement() for every item.
    let response = await fetch("/list");
    if (response.status == 200){
        let list = await response.json();
        list.forEach(addListElement);
    }
}

async function addToList(){
    let text = document.getElementById("text").value;
    if (text.length > 0){
        // add element to DOM
        let li = addListElement(text);
        // mark element as currently saving
        li.classList.add("saving");
        
        let response = await fetch("/add", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({text: text}),
        });
        if (response.status == 200){
            li.classList.remove("saving");
        }

    }
}