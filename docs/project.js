'use strict';
/* 2022-05-25 William Stiller, Elisa Beshero-Bondar, and David J. Birnbaum developed this JavaScript based on
 * the JQuery on this project: https://web.archive.org/web/20211105184055/https://disasterpeace.com/music .
 * We worked to simplify the code, apply JS classList, and implement  CSS flexboxes.
 * The JS repositions a gallery of tiled images on click to move the selected image to the beginning of a row of four.
 * It also resizes and unhides a div displaying information about the selected image.
 *  */
const projects = document.getElementsByClassName("work");
window.onload = init;


function init() {
    //console.log('init is firing');
    for (var i = 0; i < projects.length; i++) {
        projects[i].dataset.defaultposition = i + 1;
        projects[i].addEventListener('click', expand, false);
    }
}

/* 2022-05-23 ebb Source: https://www.geeksforgeeks.org/how-to-make-the-images-bigger-when-clicked/  */
function expand() {
    restore(projects);
    /* djb: First, return everything to original size and order, before changing anything. */
    var position = this.dataset.defaultposition;
    var rowNum = Math.ceil(position / 4);
    // console.log('Show my position: ' + position);
    // console.log('Show my row number: ' + rowNum);
    var currentRowOffset = (position - 1) % 4 + 1;
    // console.log('My current rowOffset position is: ' + currentRowOffset);
    var newPosition = position - currentRowOffset + 1;
    // console.log('My new sequence position is: ' + newPosition);
    /* Now we can move this (what's clicked on) back to its new sequence position */
    var insertBeforeMe = document.querySelector('[data-defaultposition="' + newPosition + '"]')
    // console.log('Insert before this position: ' + insertBeforeMe.dataset.defaultposition);
    this.parentNode.insertBefore(this, insertBeforeMe);
    // console.log('My new position will be: ' + newPos);
    this.classList.add("focus"); //ebb: this changes the size and width
}

function restore(elements) {
    /* ebb djb: Here we will restore the elements in their original order 
     * following the data.defaultposition attribute values we set in init  */ 
    for (var i = 1; i <= elements.length; i++) {
        // console.log('we are in the restore function now and i is ' + i)
        var elementToMove = document.querySelector('[data-defaultposition = "' + i + '"]');
        elementToMove.classList.remove("focus");
        elementToMove.parentNode.insertBefore(elementToMove, elements[ 'data-defaultposition = ' + i + 1]);
        // console.log('elementToMove is here: ' + elementToMove);
    }
}