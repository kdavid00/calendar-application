
$("#day").text(moment().format("dddd, MMMM Do"));





$("#9AM").on("click", function (evt){
    var text = $("#9").val().trim()
    localStorage.setItem("9AM",text);
    
});

$("#10AM").on("click", function (evt){

    var text = $("#10").val().trim()
    localStorage.setItem("10AM",text);
    
});

$("#11AM").on("click", function (evt){

    var text = $("#11").val().trim()
    localStorage.setItem("11AM",text);
    
});

$("#12PM").on("click", function (evt){

    var text = $("#12").val().trim()
    localStorage.setItem("12PM",text);
    
});

$("#1PM").on("click", function (evt){

    var text = $("#13").val().trim()
    localStorage.setItem("1PM",text);
    
});

$("#2PM").on("click", function (evt){

    var text = $("#14").val().trim()
    localStorage.setItem("2PM",text);
    
});

$("#3PM").on("click", function (evt){

    var text = $("#15").val().trim()
    localStorage.setItem("3PM",text);
    
});

$("#4PM").on("click", function (evt){

    var text = $("#16").val().trim()
    localStorage.setItem("4PM",text);
    
});

$("#5PM").on("click", function (evt){

    var text = $("#17").val().trim()
    localStorage.setItem("5PM",text);
    
});

function setBackgrounds () {
    var currentHour = moment().hours();
    console.log("currentHour", currentHour);

    $("textarea").each(function () {
    var timeSlot = $(this).attr("id");
    console.log(timeSlot);

    if (timeSlot < currentHour) {
        $(this).addClass("bg-secondary")
        
    }
    else if(timeSlot == currentHour) {
        $(this).removeClass("bg-secondary")
        $(this).addClass("bg-danger")

    } else {
        $(this).removeClass("bg-secondary")
        $(this).removeClass("bg-danger")
        $(this).addClass("bg-success")

    }
    
    })

}

setBackgrounds();

$("#9").val(localStorage.getItem("9AM"));
$("#10").val(localStorage.getItem("10AM"));
$("#11").val(localStorage.getItem("11AM"));
$("#12").val(localStorage.getItem("12PM"));
$("#13").val(localStorage.getItem("1PM"));
$("#14").val(localStorage.getItem("2PM"));
$("#15").val(localStorage.getItem("3PM"));
$("#16").val(localStorage.getItem("4PM"));
$("#17").val(localStorage.getItem("5PM"));