/**
 * This file is part of Exercise #1
 */

function checkUsernameOld(username) {
    var xhr = new XMLHttpRequest();
    /* register an embedded function as the handler */
    xhr.onreadystatechange = function() {
        /* readyState = 4 means that the response has been completed
         * status = 200 indicates that the request was successfully completed */
        if (xhr.readyState == 4 && xhr.status == 200) {
            var result = xhr.responseText;
            document.getElementById("username_status").innerHTML = result;
        }
    };
    /* send the request using GET */
    xhr.open("GET", "/check_username?username=" + username, true);
    xhr.send(null);
}

// rewrite the function checkUsernameOld above, 
// but this time invoking ajaxGET
function checkUsername(username){
    
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