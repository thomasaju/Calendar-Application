
var saveButton = $(".saveButton");



// to display time in paragraph id= currentDay(on top).
//ht function which is from https://momentjs.com/

$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a')); 



function timeColor(){
    // var currentTime = moment().format();
        //  console.log(currentTime); this shows the current time but that is not useful for this project.

    var currentHour = moment().hour(); // this gives the hour. reference: https://www.geeksforgeeks.org/moment-js-moment-hour-method/#:~:text=The%20moment().,or%20to%20set%20the%20hours.&text=or-,moment,hours()%3B
    console.log(currentHour);


    


   


 

}
   



timeColor();










