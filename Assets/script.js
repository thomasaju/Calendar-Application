
var saveButton = $(".saveButton");
var timeNow;



// for current day disaply

$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));


function timeColor(){
    var currentTime = moment().hours();
    console.log(currentTime);


    var parsedId = parseInt($(".row").attr("id"));
    
    for(parsedId; parsedId > 24; parsedId++){
        if(parsedId === currentTime){
            $(this).addClass("present");
        }
    }
    




    // if(currentTime ===19){
    //     $("#20").addClass("present");
    // }else if (currentTime>){

    // }

    
    

// $(".row").each (function(){
//     if(parsedId > currentTime){
//         $(".row").addClass("future");
//     }else  if(parsedId === currentTime){
//         $(".row").addClass("present");
//     }else {
//         $(".row").addClass("past");
//     }
// })

   

};




timeColor()










saveButton.on("click", function(){


})