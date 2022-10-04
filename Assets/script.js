
var saveButton = $(".saveButton");



// for current day disaply

$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));


function timeColor(){
    var hour = moment().hours();
 
     $(".wholeLine").each(function() {
         var currHour = parseInt($(this).attr("id"));
 
         console.log(this); //each time-block
 
         if (currHour > hour) {
             $(this).addClass("future");
         } else if (currHour === hour) {
             $(this).addClass("present");
         } else {
             $(this).addClass("past");
         }
     })

}
   



timeColor();










