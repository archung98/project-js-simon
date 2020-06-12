


let simonData = {
  colorSequence: ["red", "red", "green"],
  colorIndex: 0,
  active: true,
}

function isResponseCorrect(simonData, responseColor){
  if (simonData.colorSequence[simonData.colorIndex] === responseColor) {
    return true;
  } else {
    return false;
  }
}

var arrLength = 0 ;
function getLength(simonData) {
  arrLength = simonData.colorSequence.length;
  return arrLength;
}

function nextColor(simonData){
  //update colorIndex
  simonData.colorIndex += 1;
}


function abort(simonData) {
  alert("Game Over");
  resetcounter();
  simonData.colorIndex = 0;
}

function successGame(simonData) {
  alert("YOU WON");
  resetcounter();
  simonData.colorIndex = 0;
  document.getElementById("result").innerHTML = "One more round?";
}

function displayText(simonData){
  console.log("counter", counter);
  console.log("color", simonData.colorSequence[simonData.colorIndex]);
  return document.getElementById("textcolor").innerHTML = simonData.colorSequence[simonData.colorIndex];
}
  
function handleResponse(simonData, responseColor){
  //needs condition to succeed ;
  arrLength = getLength(simonData);
 if ((simonData.colorIndex + 1) === arrLength){
   //if user reaches legnth without aborting, successful
   alert("YOU WON");
   resetcounter();
   simonData.colorIndex = 0;
   document.getElementById("result").innerHTML = "One more round?";
 } else {
    if (simonData.active){
      //if game is active
      if (isResponseCorrect(simonData, responseColor)){
        //if responsecolor is correct
        document.getElementById("result").innerHTML = "correct, move on";
        nextColor(simonData);
        //give next color 
      } else {
        //not correct, end game
        document.getElementById("result").innerHTML = "fail, try again";
        abort(simonData);
      }
    }
  } 
}
  


