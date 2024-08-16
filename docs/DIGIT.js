const mainEntries = document.getElementsByClassName("table-row")
window .onload = init;


function init() {
  for (var i = 0; i < mainEntries.length; i++) {
    if (mainEntries[i].querySelector("span.dots")) /*if table-row contains element with class="dots" AKA if it has an arrow button*/
      mainEntries[i].addEventListener('click', showMore, false);
  }
  let creditsSpace = document.getElementById("creditsP");
  creditsSpace.addEventListener('click', creditsExpand, false);

}




function Menubar() {
  var x = document.getElementById("myMenu");
  if (x.className === "menu") {
    x.className += " responsive";
  } else {
    x.className = "menu";
  }
}


function creditsExpand() {
  let arrow = document.getElementById("arrow");
  let moreText = document.getElementById("more");
  let creditsP = document.getElementById("creditsP");
  // let btnText = document.getElementById("myBtn");
let  moreTextDisplayInfo = window.getComputedStyle(moreText).getPropertyValue('display');

  if (arrow.innerHTML === "▼") {
    arrow.innerHTML = "▲";
    moreText.style.display = "inline";
    creditsP.style.height = "auto";
    creditsP.style.overflowY = "auto";
    console.log(arrow);
    console.log(moreTextDisplayInfo);

  } else {
    arrow.innerHTML = "▼";
    moreText.style.display = "none";
    creditsP.style.height = "60px";
    creditsP.style.overflowY = "hidden";
    console.log(arrow);
    console.log(moreTextDisplayInfo);

  }
}




function showMore() {
  let w = window.innerWidth;
  let arrow = this.querySelector("span.dots");
  let whatMoreBig = this.querySelector("span.moreBigScr");
  let whatMoreSmall = this.querySelector("div.moreSmallScr");
  let inheritSmall = window.getComputedStyle(whatMoreSmall).getPropertyValue('display');
  //console.log(inheritSmall);
  let inheritLarge = window.getComputedStyle(whatMoreBig).getPropertyValue('display');
  // console.log(inheritLarge);

  if( inheritSmall !== "none" || inheritLarge !== "none"){
    // console.log("description is on display");
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
  else{
    if(w < 455){
      arrow.innerHTML = '⬆';
      whatMoreSmall.style.display = "inherit";
    }
    else{
      arrow.innerHTML = '⬆';
      whatMoreBig.style.display = "inherit";
    }
    // console.log("description is NOT on display");
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
