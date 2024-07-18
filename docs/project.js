'use strict';
/* 2022-05-25 William Stiller, Elisa Beshero-Bondar, and David J. Birnbaum developed this JavaScript based on
 * the JQuery on this project: https://web.archive.org/web/20211105184055/https://disasterpeace.com/music .
 * We worked to simplify the code, apply JS classList, and implement  CSS flexboxes.
 * The JS repositions a gallery of tiled images on click to move the selected image to the beginning of a row of four.
 * It also resizes and unhides a div displaying information about the selected image.
 *  */
const projects = document.getElementsByClassName("work");
// const desc = document.getElementsByClassName("desc");
window.onload = init;


function init() {
    //console.log('init is firing');


    for (var i = 0; i < projects.length; i++) {
        projects[i].addEventListener('mouseover', infoPeek, false);
        projects[i].addEventListener('mouseout', infoPeekOut, false);//takes class="hover" off of each project
        projects[i].dataset.defaultposition = i + 1;
        projects[i].addEventListener('click', expand, false);
    }
    // for (var i = 0; i < desc.length; i++){
    //     desc[i].addEventListener('mouseover', phaseIn, false);
    // }

    console.log(`There are ${desc.length} desc classes present`) //srr: displays 28
}

/* 2022-05-23 ebb Source: https://www.geeksforgeeks.org/how-to-make-the-images-bigger-when-clicked/  */
function expand() {
    // console.log(projects)
    /* 2022-09-24 ws The page adds the focus class even when on a mobile view, where it shouldn't. Detecting the pagewidth after a click 
     * and continuing to run expand() would solve the issue. Be sure to change the pagewidth value here if mobile width changes in the css. */
    var w = window.innerWidth;
    /*console.log(window.innerWidth);*/
    if (w > 455) {
        var focusOn = this.classList.contains('focus'); //asks if class focus is present
        // console.log(this.classList.contains('focus')); //displays answer ^^

        // console.log(this.classList.contains('hover')); //displays answer ^^

        restore(projects);
        /* djb: First, return everything to original size and order, before changing anything. */
        var position = this.dataset.defaultposition;
        var rowNum = Math.ceil(position / 3);
        // console.log('Show my position: ' + position);
        // console.log('Show my row number: ' + rowNum);
        var currentRowOffset = (position - 1) % 3 + 1; //srr: jumbles order after click
        // console.log('My current rowOffset position is: ' + currentRowOffset);
        var newPosition = position - currentRowOffset + 1;
        // console.log('My new sequence position is: ' + newPosition);
        /* Now we can move this (what's clicked on) back to its new sequence position */
        var insertBeforeMe = document.querySelector('[data-defaultposition="' + newPosition + '"]')
         console.log('Insert before this position: ' + insertBeforeMe.dataset.defaultposition);
        this.parentNode.insertBefore(this, insertBeforeMe);
         console.log('My new position will be: ' + newPosition);
        if (focusOn === true){
            restore(projects);
            this.classList.remove("focus");
            //this.classList.add("hover");
            // console.log(this.classList.contains('hover'));
        } else {
            this.classList.add("focus"); //ebb: this changes the size and width
            // focus only added to the work class
           // this.classList.remove("hover");

        }
    } else {}
}

function restore(elements) {
    /* ebb djb: Here we will restore the elements in their original order //srr: unjumbles
     * following the data.defaultposition attribute values we set in init  */ 
    for (var i = 1; i <= elements.length; i++) {
        // console.log('we are in the restore function now and i is ' + i)
        var elementToMove = document.querySelector('[data-defaultposition = "' + i + '"]');
        elementToMove.classList.remove("focus");
        elementToMove.parentNode.insertBefore(elementToMove, elements[ 'data-defaultposition = ' + i + 1]);
        // console.log('elementToMove is here: ' + elementToMove);
    }
}



function infoPeek(){
    var w = window.innerWidth;
    /*console.log(window.innerWidth);*/
    if (w > 455) {
        this.classList.add('hover');
        console.log(this.childNodes[3]);//srr: displays div.desc for some reason
        this.childNodes[3].classList.add('deschov');


        // let work = this;
        // let thisDesc = this.children;
        // console.log(`There are ${thisDesc} children`);

        // if(this.children.classList.contains("desc")){
            // console.log("desc is here");
            // this.children.classList.add("deschov");
        // }
        // else{}



        if (this.classList.contains("focus")) {
            this.classList.remove("hover");
            this.childNodes[3].classList.remove('deschov');


            // if(this.children.classList.contains("deschov")){
            //     this.children.classList.remove("deschov");
            //  }
            // else{}


        } else {}
        // phaseIn(desc);
    }
    else{}
}

function infoPeekOut() {
    if(this.classList.contains("hover")){
        this.classList.remove("hover");
        this.childNodes[3].classList.remove('deschov');
    }
    else{}
}


