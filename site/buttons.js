//Use CONSLE.LOG to pring out things on console

// $('.simon-button.green').on('mousedown', function() {
//  $('.simon-button.green').addClass("light-up");
// });
// var colorSequence = ["red", "red", "green"];
// var colorIndex = 0; 
let simonData = {
  colorSequence: ["red", "red", "green"],
  colorIndex: 0,
  active: TRUE,
  length: 3,
}
function isResponseCorrect(simonData, responseColor){
  if (simonData.colorSequence[simonData.colorIndex] == responseColor) {
    return TRUE;
  } else {
    return FALSE;
  }
}

function nextColor(simonData){
  //update colorIndex
  simonData.colorIndex += 1;
}

function failEndGame(simonData){
  simonData.active = FALSE; 
  document.getElementById("result").innerHTML = "fail, try again";
}


function handleResponse(simonData, responseColor){
  //needs condition to succeed 
 //document.getElementById("result").innerHTML = simonData.colorIndex;
  while (simonData.colorIndex<simonData.length) {
    while (simonData.active){
      //if game is active
      if (isResponseCorrect(simonData, responseColor)){
        //if responsecolor is correct
        document.getElementById("result").innerHTML = "o";
        nextColor(simonData);
        //give next color 
      } else {
        //not correct, end game
        document.getElementById("result").innerHTML = "x";
        failEndGame(simonData);
      }
    }
  } 
  //went through all iterations until simonData ended
  //document.getElementById("result").innerHTML = "YOU WON";
}

/*
// //removing the class when mouse button is released
$('.simon-button.green').on('click', function() {
  handleResponse(simonData, "green");
 });

$('.simon-button.blue').on('click', function() {
  handleResponse(simonData, "blue");
});

$('.simon-button.yellow').on('click', function() {
  handleResponse(simonData, "yellow");
});

$('.simon-button.red').on('click', function() {
  handleResponse(simonData, "red");
});
*/

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


