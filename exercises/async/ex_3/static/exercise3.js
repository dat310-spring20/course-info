/**
 * This file is part of Exercise #3
 */

function lookup(item_id) {
    if (item_id.length == 3) { /* if item id is 3 digits */
        let url = "/inventory?item_id=" + item_id;
        // fetch item from url using fetch
        // parse JSON and fill form
        
    }
    else {
        /* clear form values */
        document.getElementById("name").value = "";
        document.getElementById("brand").value = "";
        document.getElementById("size_x").value = "";
        document.getElementById("size_y").value = "";
        document.getElementById("size_z").value = "";
        document.getElementById("price").value = "";
        document.getElementById("available").checked = false;
    }
}

