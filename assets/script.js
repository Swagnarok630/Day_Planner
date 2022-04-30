// To show the current date and day
$("#currentDay").text(moment().format("MMMM Do, YYYY (dddd)"))

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

// Variable and eventlistener for dark mode toggle
var darktoggle = document.querySelector("#toggle");
darktoggle.addEventListener("click", toggle);
// Function to toggle dark mode
function toggle() {
    // Toggles site background
    var bg = document.body;
    bg.classList.toggle("darkmodebody")
    // Toggles header
    var head = document.querySelector(".jumbotron");
    head.classList.toggle("darkmodehead")
    // Toggles all hour nodes
    var hourslot = document.querySelectorAll(".hour");
    for (var i = 0; i < hourslot.length; i++) {
        hourslot[i].classList.toggle("darkmodehour")
    }
    // Toggles all borders above rows
    var rows = document.querySelectorAll(".row");
    for (var i = 0; i < rows.length; i++) {
        rows[i].classList.toggle("darkmoderow")
    }
    // Toggles all borders to left of saves
    var saves = document.querySelectorAll(".save")
    for (var i = 0; i < saves.length; i++) {
        saves[i].classList.toggle("darksave")
    }
    // Toggles text in past textboxes
    var pasts = document.querySelectorAll(".past")
    for (var i = 0; i < pasts.length; i++) {
        pasts[i].classList.toggle("darkpast")
    }
    // Toggles text in present textboxes
    var presents = document.querySelectorAll(".present")
    for (var i = 0; i < presents.length; i++) {
        presents[i].classList.toggle("darkpresent")
    }
    // Toggles text in future textboxes
    var futures = document.querySelectorAll(".future")
    for (var i = 0; i < futures.length; i++) {
        futures[i].classList.toggle("darkfuture")
    }
}

// Variable and eventlistener for clear button
var clear = document.querySelector("#clear");
clear.addEventListener("click", clean);
// Function to clear inputs on screen
function clean() {
    localStorage.clear();
    var textinput = document.querySelectorAll(".description")
    for (i = 0; i < textinput.length; i++) {
        textinput[i].value = "";
    }
}