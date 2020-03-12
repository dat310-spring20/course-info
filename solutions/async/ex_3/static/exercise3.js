/**
 * This file is part of Exercise #3
 */

async function lookup(item_id) {
    if (item_id.length == 3) { /* if item id is 3 digits */
        let url = "/inventory?item_id=" + item_id;

        let result = await fetch(url);
        if (result.status == 200){
            result = await result.json();
            if (result.name){
                setForm(result);
            }
        }
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

function setForm(result){
    document.getElementById("name").value = result.name;
    document.getElementById("brand").value = result.brand;
    document.getElementById("size_x").value = result.size_x;
    document.getElementById("size_y").value = result.size_y;
    document.getElementById("size_z").value = result.size_z;
    document.getElementById("price").value = result.price;
    document.getElementById("available").checked = result.available;
}
