const mainEntries = document.getElementsByClassName("col-3")

window .onload = init;

function init() {

  for (var i = 0; i < mainEntries.length; i++) {
    if (mainEntries[i].querySelector("span.more"))

    mainEntries[i].addEventListener('click', showMore, false);
    mainEntries[i].addEventListener('dblclick', hideMore, false);
    mainEntries[i].addEventListener('touchstart', hideMore, false);



}
}

function Menubar() {
  var x = document.getElementById("myMenu");
  if (x.className === "menu") {
    x.className += " responsive";
  } else {
    x.className = "menu";
  }
}

function showMore() {
  var arrow = this.querySelector("span.dots");
  var whatMore = this.querySelector("span.more");
  console.log('whatMore = ' + whatMore);
  arrow.innerHTML = '⬆';
  whatMore.style.display = "inherit";

}

function hideMore() {
  var arrow = this.querySelector("span.dots");
  var whatMore = this.querySelector("span.more");
   arrow.innerHTML = '⬇';
  whatMore.style.display = "none";
 
}

function hideMenu() {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos || 150 > document.documentElement.scrollTop) {
        document.getElementsByClassName("menu")[0].style.top = "0";
      } else {
        document.getElementsByClassName("menu")[0].style.top = "-3.5rem";
      }
      prevScrollpos = currentScrollPos;
    }
}
