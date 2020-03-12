function updateLicence(snippet){
    document.getElementById("license_check").innerHTML = snippet;
}

function checkLicense() {
    var name = document.getElementById("name").value;
    var license = document.getElementById("license").value;
    /* send the request if both name and license are filled in */
    if (name.length > 0 && license.length > 0) {
        let data = "name=" + name + "&license=" + license;
        
        fetch("/check_license",{
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: data,
        })
        .then(
            function(response){
                if (response.status == 200){
                    return response.text()
                }
                return '';
            }
        )
        .then(function(result){updateLicence(result);});
    }
    else {
        updateLicence("");
    }
}

async function checkLicenseAsync() {
    var name = document.getElementById("name").value;
    var license = document.getElementById("license").value;
    /* send the request if both name and license are filled in */
    if (name.length > 0 && license.length > 0) {
        let data = "name=" + name + "&license=" + license;
        
        let result = awaitfetch("/check_license",{
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: data,
        });
        if (response.status == 200){
            let result = await esponse.text();
            updateLicence(result);
        }
    }
    else {
        updateLicence("");
    }
}