var dayDisplayEl = $("#currentDay");
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

function displayDay() {
    var currentDay = moment().format("dddd, MMMM Do");
    dayDisplayEl.text(currentDay);
}

displayDay();

function getCurrentHour() {
    var rightNow = moment().hour()
    return rightNow;
}

function colorTimeBlocks() {
    var rightNow = 15; // Testing coloring - update to getCurrentHour()

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

colorTimeBlocks();
