//Use CONSLE.LOG to pring out things on console

// $('.simon-button.green').on('mousedown', function() {
//  $('.simon-button.green').addClass("light-up");
// });
// var colorSequence = ["red", "red", "green"];
// var colorIndex = 0; 
let simonData = {
  colorSequence: ["red", "red", "green"],
  colorIndex: 0,
  active: true,
}
function isResponseCorrect(simonData, responseColor){
  return simonData.colorSequence[simonData.colorIndex] === responseColor;
}

function nextColor(simonData){
  simonData.colorIndex += 1;
}
function endGame(simonData){
  simonData.active = false; 
  console.log("Failed");
}

function isGameActive(simonData){
  return simonData.active;
}

function handleResponse(simonData, responseColor){
  if (isGameActive(simonData)){
    //if game is active
    if (isResponseCorrect(simonData, responseColor)){
      //if responsecolor is correct
      nextColor(simonData);
      //give next color 
    } else {
      //not correct, end game
      endGame(simonData);

    }
  }
}

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


