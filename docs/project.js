const projects = document.getElementsByClassName("work")

window.onload = init;

function init() {
    for (var i = 0; i < projects.length; i++) {
        projects[i].addEventListener('click', expand, false);
    }
}

/* 2022-05-23 ebb Source: https://www.geeksforgeeks.org/how-to-make-the-images-bigger-when-clicked/  */
function expand() {
    console.log('Yay I am firing');
    this.classList.toggle("focus");
    
}

/*
 function addFocus() {

 var x = document.getElementById("other");
 if (x.className === "work") {
 x.className += "focus";
 console.log("Added")
 } else {
 x.className = "work";
 console.log("Removed")
 }
 }
 */