// Majarity of code provided by Professor Chad
// Function to create timeblocks
function timeblocks(hour, todo = "") {

    var currenthour = new Date().getHours();
    var timestream = "future";

    if (currenthour > hour) timestream = "past";
    if (currenthour === hour) timestream = "present";

    $(".container").append($(`
    <div class="row timeblock">
        <div class="hour col-1">${hour}:00</div>
        <textarea name="" id="" cols="30" rows="3" class="description col-9 ${timestream}">${todo}</textarea>
        <div class="btn save col-2">Save</div>
    </div>`));
}

for (var i = 9; i < 18; i++) {
    timeblocks(i);
}

// TODO: Event clickers for save buttons, local storage read/write