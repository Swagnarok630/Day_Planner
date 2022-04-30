
// Majarity of code provided by Professor Chad during demo
// Function to create timeblocks
function timeblocks(hour, todo = "") {
    // Variable to set current time
    var currenthour = new Date().getHours();
    // Checks for days of future past present
    var timestream = "future";
    if (currenthour > hour) timestream = "past";
    if (currenthour === hour) timestream = "present";

    // If items in localStorage exist, they will be retrieved here
    var todo = localStorage.getItem(hour);

    $(".container").append($(`
    <div class="row timeblock">
        <div class="hour col-1">${hour}:00</div>
        <textarea name="" id="${hour}" cols="30" rows="3" class="description col-9 ${timestream}">${todo || ""}</textarea>
        <div class="btn save col-2">Save</div>
    </div>`));
}

// Creating a timeblock for each hour
for (var i = 9; i < 18; i++) {
    timeblocks(i);
}

// Variable for save buttons
var savebutton = document.querySelectorAll(".save");

// Adding event listener to each save button at each hour
for (var i = 0; i < savebutton.length; i++) {
    savebutton[i].addEventListener("click", saving);
}

// Function to allow user to save input in the respective node
function saving(task) {
    // Variables for items in text area from user
    var taskname = task.target.parentNode.children[1].id;
    var taskvalue = task.target.parentNode.children[1].value;
    // Writing to localStorage
    localStorage.setItem(taskname, taskvalue);
}

