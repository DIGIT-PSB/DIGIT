const mainEntries = document.getElementsByClassName("table-row")

window .onload = init;


function init() {


  for (var i = 0; i < mainEntries.length; i++) {
    if (mainEntries[i].querySelector("span.dots")) /*if table-row contains element with class="dots" AKA if it has an arrow button*/

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
  let w = window.innerWidth;
  let arrow = this.querySelector("span.dots");
  let whatMoreBig = this.querySelector("span.moreBigScr");
  let whatMoreSmall = this.querySelector("div.moreSmallScr");

  console.log('whatMoreBig = ' + whatMoreBig);
  console.log('whatMoreSmall = ' + whatMoreSmall);

  if(w < 455){
    console.log('whatMoreSmall = ' + whatMoreSmall);
    arrow.innerHTML = '⬆';
    whatMoreSmall.style.display = "inherit";

  }
  else{
    console.log('whatMoreBig = ' + whatMoreBig);
    arrow.innerHTML = '⬆';
    whatMoreBig.style.display = "inherit";

  }
  // this.addEventListener('click', hideMore(), false);



}

function hideMore() {
  let w = window.innerWidth;
  let arrow = this.querySelector("span.dots");
  var whatMoreBig = this.querySelector("span.moreBigScr");
  var whatMoreSmall = this.querySelector("div.moreSmallScr");
  if(w < 455){
    console.log('whatMoreSmall = ' + whatMoreSmall);
    arrow.innerHTML = '⬇';
    whatMoreSmall.style.display = "none";


  }else{

    console.log('whatMoreBig = ' + whatMoreBig);
    arrow.innerHTML = '⬇';
    whatMoreBig.style.display = "none";
  }


 
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
