var dayDisplayEl = $("#currentDay");
var buttons = $("button");

// timeblock handles
var nine = $("#9AM").children().eq(1);
var ten = $("#10AM").children().eq(1);
var eleven = $("#11AM").children().eq(1);
var noon = $("#12PM").children().eq(1);
var one = $("#1PM").children().eq(1);
var two = $("#2PM").children().eq(1);
var three = $("#3PM").children().eq(1);
var four = $("#4PM").children().eq(1);
var five = $("#5PM").children().eq(1);
var hourArr = [nine, ten, eleven, noon, one, two, three, four, five];

// Displays current day
function displayDay() {
    var currentDay = moment().format("dddd, MMMM Do");
    dayDisplayEl.text(currentDay);
}

// Gets current hour
function getCurrentHour() {
    var rightNow = moment().hour()
    return rightNow;
}

// Colors the time blocks according to the current postioning in time
function colorTimeBlocks() {
    var rightNow = getCurrentHour();

    for (let i = 0; i < hourArr.length; i++) {
        var timeBlock = i + 9;

        if (timeBlock === rightNow){
            hourArr[i].addClass("present");
        } else if (timeBlock < rightNow) {
            hourArr[i].addClass("past");
        } else {
            hourArr[i].addClass("future");
        }
    }
}

// Saves tasks to local storage
buttons.on("click", function(event) {
    var eventSelector = event.target.id;
    var textLocationId = $("#" + eventSelector).parent("section").attr("id");
    var textLocation = $("#" + textLocationId);
    var task = textLocation.children("textarea").val();

    console.log(eventSelector);
    
    localStorage.setItem(textLocationId, task);
})

// Loads tasks saved from local storage
function loadTasks() {
    var len = localStorage.length;
    
    for (let i = 0; i < len; i++) {
        var keyName = localStorage.key(i);
        var savedTask = localStorage.getItem(keyName);
        var textLocation = $("#" + keyName).children("textarea");
        $(textLocation).text(savedTask);
    }
}

displayDay();
colorTimeBlocks();
loadTasks();
