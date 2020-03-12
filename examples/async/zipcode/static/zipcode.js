/* update place in form. Used as success funtion */
function updatePlace(place){
    document.getElementById("place").value = place;
}

/* get place from postcode */
function getPlace(postcode) {
    let uri = "/getplace?postcode=" + postcode;
    ajaxGET(uri,callback);

}

function ajaxGET(uri, success){
    var xhr = new XMLHttpRequest();
    /* register an embedded function as the handler */
    xhr.onreadystatechange = function () {
        /* readyState = 4 means that the response has been completed
         * status = 200 indicates that the request was successfully completed */
        if (xhr.readyState == 4 && xhr.status == 200) {
            var result = xhr.responseText;
            success(result);
        }
    };
    /* send the request using GET */
    xhr.open("GET", uri, true);
    xhr.send(null);
}