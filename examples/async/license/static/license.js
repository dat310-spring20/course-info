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

function updateLicence(snippet){
    document.getElementById("license_check").innerHTML = snippet;
}

function checkLicense() {
    var name = document.getElementById("name").value;
    var license = document.getElementById("license").value;
    /* send the request if both name and license are filled in */
    if (name.length > 0 && license.length > 0) {
        let data = "name=" + name + "&license=" + license;
        
        let promise = fetch("/check_license",{
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: data,
        })
        console.log(promise);
        let promise2 = promise.then(function(response){ console.log(promise); return response.text();});
        promise2.then(updateLicence);
        //ajaxPOST("/check_license", data, updateLicence);
    }
    else {
        updateLicence("");
    }
}