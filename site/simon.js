
var counter = 0;
function clickcounter(){
    counter += 1;
    document.getElementById("clicks").innerHTML = counter;   //this line calls the <h2> by the id and adds to that
}

function resetcounter() {
    counter = 0;
    document.getElementById("clicks").innerHTML = counter;
}


/*
var boo = TRUE;
var usercolor;
function userresponse (){
    //if the user clicks red, displays red 
    document.getElementById("colortext").innerHTML = usercolor;
    if (usercolor=='red')  {
        boo = TRUE;
    } else {
        boo = FALSE;
    }
    if (boo) {
        document.getElementById("colortext").innerHTML = usercolor; 
    }
    
    //maybe write an if statement to check if .simon-button.red has the class light up?? A problem: but light up is removed 
    // maybe add a var that is True when red is clicked and False when another is clicked; needs to be in the global scope
    //check if that variable is True of False  to see if it will be GAME OVER or moves on to the next color 

}
*/