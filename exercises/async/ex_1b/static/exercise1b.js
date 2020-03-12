/**
 * This file is part of Exercise #1b
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
    /* send the request using POST */
    xhr.open("POST", "/check_username", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("username=" + username);
}

function checkUsername(username) {
    // this method should do the same as checkUsernameOld, but using ajaxPOST
}

/* This method preform a post request to url including data.
   * url: url string
   * data: www-from-urlencoded data
   * success: function(response) called on success
*/
function ajaxPOST(url, data, success) {
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
    /* send the request using POST */
    xhr.open("POST", url, true);
    /* To POST data like an HTML form, add an HTTP header */
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    /* variables go in the request body */
    xhr.send(data);
}

