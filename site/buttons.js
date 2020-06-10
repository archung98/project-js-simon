//Use CONSLE.LOG to pring out things on console

// $('.simon-button.green').on('mousedown', function() {
//  $('.simon-button.green').addClass("light-up");
// });

// //removing the class when mouse button is released
// $('.simon-button.green').on('mouseup', function() {
//   $('.simon-button.green').removeClass("light-up");
//  });


// $('.simon-button.blue').on('click', function() {
//   $('.simon-button.blue').addClass("light-up");
// });

// $('.simon-button.yellow').on('click', function() {
//   //alert('You clicked the yellow button');
//   $('.simon-button.yellow').addClass("light-up");
// });

// $('.simon-button.red').on('click', function() {
//   //alert('You clicked the red button');
//   $('.simon-button.red').addClass("light-up");
// });

//MUCH SIMPLER!!
$('.simon-button').on('mousedown', function(){
  $(this).addClass('light-up')
})

$('.simon-button').on('mouseup', function(){
  $(this).removeClass('light-up')
})
// function lightup(){
//   var button = document.querySelector(".simon-button.green")
//   button.classList.add("light-up")  (set time out, set intreval)
// }


