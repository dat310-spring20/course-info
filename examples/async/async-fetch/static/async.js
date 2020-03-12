async function asyncFunction(){
    appendMessage("starting async function");
    await fetch("/delay");
    appendMessage("continuing async function");
}

function normalFunction(){
    appendMessage("running normal function");
}

function appendMessage(msg){
    let li = document.createElement('li');
    li.innerText = msg;
    document.getElementById("messages").appendChild(li);
}