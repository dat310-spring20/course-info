/*
 * Entry class
 */
function Entry(title, date, category, content) {
    this.title = title;
    this.date = date;
    this.category = category;
    this.content = content;
    // TODO format the semi-colon separated content points into a list: "todo1; todo2" -> ["todo1", "todo2"]
    this.display = displayEntry;
}


/*
 * Display a given entry
 */
function displayEntry(idx) {    
    var entry = "<div class=\"todo_title\">" + this.title + "</div>\n"
              + "<div class=\"todo_date\">" + this.date + "</div>\n";
    // TODO: display category
    
    var content = "<div class=\"todo_content\">" + this.content + "</div>\n";
    // TODO: display the different elements in the content list as unordered list.

    return entry + content;
}

/*
 * Check input fields
 * (Function returns true if there is an error)
 */
function isInputError(title, date, content) {
    if (title.length == 0) {
        alert("Empty title!");
    }
    // check for empty fields
    else if (date.length == 0) {
        alert("No date!");
    }
    // no error
    else {    
    	return false;
    }
    return true;
}

/*
 * Add a new entry
 */
function addEntry() {
    var title = document.getElementById("add_title").value;
    var date = document.getElementById("add_date").value;
    date = formatDate(date);

    var content = document.getElementById("add_content").value;    
    
    if (!isInputError(title, date, content)) {
        todos.push(new Entry(title, date, "", content));
        // reset field values and hide add panel
        document.getElementById("add_title").value = "";
        document.getElementById("add_date").value = "";
        document.getElementById("add_content").value = "";
        // refresh todo list
        displayEntries();
    }
}


/*
 * Change date-string format
 */
function formatDate(date){
    let parts = date.split("-");
    if (parts.length == 3)
        date = parts[2] + "/" + parts[1] + "/" + parts[0];
    return date;
}

/*
 * Display all entries
 */
function displayEntries() {
    var entriesDiv = document.getElementById("todos");        
    // i) clear the list by settin innerHTML on the list empty
    entriesDiv.innerHTML = "";    
    // ii) (re-)add all entries
    // TODO: only add entries for the category selected
    for (var i = 0; i < todos.length; i++) {
        var entryDiv = document.createElement("div");
        entryDiv.innerHTML = "<div id=\"todo_" + i + "\" class=\"todo " + "\">" 
                            + todos[i].display(i) + "</div>";
        entriesDiv.appendChild(entryDiv);
        
    }
}
