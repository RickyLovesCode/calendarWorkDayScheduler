$(document).ready(function () {

    $("#currentDay").text(moment().format("MMMM Do, YYYY dddd"));

    function colorCode() {
        var thisHour = moment().hours();
        console.log(thisHour);

        $(".timeblock").each(function () {
            var hour = parseInt($(this).attr("id").split("_")[0])
            console.log(hour, typeof hour);


            if (hour < thisHour) {
                $(this).addClass("past");
            }
            else if (hour === thisHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");

            }
        })

    }

    colorCode();

    $(".save").on("click", function () {
        var note = $(this).siblings(".notes").val();
        var timeId = $(this).parent().attr("id");
        console.log("click");
        localStorage.setItem(timeId, note);
    })

    $("#9_oclock .notes").val(localStorage.getItem("9_oclock"));
    $("#10_oclock .notes").val(localStorage.getItem("10_oclock"));
    $("#11_oclock .notes").val(localStorage.getItem("11_oclock"));
    $("#12_oclock .notes").val(localStorage.getItem("12_oclock"));
    $("#13_oclock .notes").val(localStorage.getItem("13_oclock"));
    $("#14_oclock .notes").val(localStorage.getItem("14_oclock"));
    $("#15_oclock .notes").val(localStorage.getItem("15_oclock"));
    $("#16_oclock .notes").val(localStorage.getItem("16_oclock"));
    $("#17_oclock .notes").val(localStorage.getItem("17_oclock"));
























})