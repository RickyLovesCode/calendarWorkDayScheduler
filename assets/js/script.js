$(document).ready(function () {

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
























})