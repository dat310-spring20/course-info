/* update place in form. Used as success funtion */
function updatePlace(place){
    document.getElementById("place").value = place;
}

// get place using promises
function getPlacePromise(postcode) {
    let uri = "/getplace?postcode=" + postcode;

    fetch(uri)
    .then(function(response){ 
        // check if status code is success
        if (response.status == 200){
            return response.text();
        }
        // else return a default result
        return '';
    })
    .then(function(result){ 
        updatePlace(result); 
    });
}

/* get place from postcode */
async function getPlace(postcode) {
    let uri = "/getplace?postcode=" + postcode;

    let response = await fetch(uri);
    if (response.status == 200){
        let result = await response.text()
        updatePlace(result);
    }
}

function getPlacePromise(postcode) {
    let uri = "/getplace?postcode=" + postcode;

    fetch(uri)
    .then(function(response){ 
        // check if status code is success
        if (response.status == 200){
            return response.text();
        }
        // else return a default result
        return '';
    })
    .then(function(result){ 
        updatePlace(result); 
    });
}