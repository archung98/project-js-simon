
var counter = 0
function clickcounter(){
    counter += 1;
    document.getElementById("clicks").innerHTML = counter;   //this line calls the <h2> by the id and adds to that
}

function resetcounter() {
    document.getElementById("clicks").innterHTML = 0;
    counter = 0;

}

var usercolor = TRUE;
function userresponse (){
    document.getElementById("colortext").innerHTML = usercolor;
    if (usercolor) {
        //if usercolor is true 
    }
    
    //maybe write an if statement to check if .simon-button.red has the class light up?? A problem: but light up is removed 
    // maybe add a var that is True when red is clicked and False when another is clicked; needs to be in the global scope
    //check if that variable is True of False  to see if it will be GAME OVER or moves on to the next color 

}