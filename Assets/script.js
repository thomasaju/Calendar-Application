
var saveButton = $(".saveButton");
var timeNow;



// for current day disaply

$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));


function timeColor(){
    var currentTime = moment().hours();
    console.log(currentTime);


    
    
    // console.log(this); //each time-block
    
   $(".wholeLine").each(function(){
    console.log(this);
    var parsedId = parseInt($(this).attr("id"));
   
    if (parsedId > currentTime){
        $ (this).addClass("future");
    }else if(parsedId === currentTime){
        $(this).addClass("present");
    }else {
        $(this).addClass("past");
    }
   })
    




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