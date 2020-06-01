function addBox(){
    // TODO: ass a <div> with class "box" to the boxes.
    // add specific event handler to this box.
    let box = document.createElement("div");
    box.classList.add("box");
    box.onclick=changeColor;
    box.ondblclick=remove;
    box.style.backgroundColor = "blue";
    document.getElementById("boxes").appendChild(box);
}

function allBlue(){
    // TODO: change the color of all boxes to blue.
    document.querySelectorAll(".box").forEach(
        function(box){
            box.style.backgroundColor = "blue";
        }
    )
}

function changeColor(){
    let color = this.style.backgroundColor;
    switch (color) {
        case "green":
            this.style.backgroundColor = "blue"
            break;
        case "red":
            this.style.backgroundColor = "green"
            break;
        default:
            this.style.backgroundColor = "red";
    }
}

function remove(){
    this.parentElement.removeChild(this);
}

function init(){
    // this function is run on load. 
    // TODO: add eventlistener to the box, that changes color on click.
    // TODO: add eventlistener to the box, that remove box on double-click.
    document.querySelectorAll(".box").forEach(function(box){
        box.onclick=changeColor;
        box.ondblclick=remove;
    });

}

window.onload = init;