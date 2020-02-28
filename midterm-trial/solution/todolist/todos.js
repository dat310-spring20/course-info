/*
 * Entry class
 */
function Entry(title, date, category, content) {
    this.title = title;
    this.date = date;
    this.category = category;
    this.content = content.split(";");
    // TODO format the semi-colon separated content points into a list: "todo1; todo2" -> ["todo1", "todo2"]
    this.display = displayEntry;
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
 * Display a given entry
 */
function displayEntry() {
    var entry = "<div class='todo_title'>" + this.title + "</div>\n"
              + "<div class='todo_date'>" + this.date + "</div>\n"
              + "<div class='todo_category'>" + this.category + "</div>\n";
    // TODO: display category
    
    var content = "<div class='todo_content'><ul>";
    this.content.forEach(element => {
        if (element.trim())
            content += "<li>" + element.trim() + "</li>\n";
    });

    content += "</ul></div>\n";
    this.con
    
    var entryDiv = document.createElement("div");
    entryDiv.classList.add("todo");
    entryDiv.classList.add(this.category);
    entryDiv.innerHTML = entry + content;   


    return entryDiv;
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

    var category = document.getElementById("add_category").value;

    var content = document.getElementById("add_content").value;    
    
    if (!isInputError(title, date, content)) {
        todos.push(new Entry(title, date, category, content));
        // reset field values and hide add panel
        document.getElementById("add_title").value = "";
        document.getElementById("add_date").value = "";
        document.getElementById("add_content").value = "";
        // refresh todo list
        displayEntries();
    }
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
    let filtered = todos;
    let displayCat = document.getElementById("display_category").value;
    if (displayCat != "")
        filtered = todos.filter(function(todo){return todo.category == displayCat});

    for (var i = 0; i < filtered.length; i++) {
        entriesDiv.appendChild(filtered[i].display());
        
    }
}
