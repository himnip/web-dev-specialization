var menuBtn = document.getElementById("menuBtn")
var sideNav = document.getElementById("sideNav")
var menu = document.getElementById("menu")

sideNav.style.right = "-250px";

menuBtn.onclick = function(){
     if(sideNav.style.right == "-250px"){
         sideNav.style.right = "0";
         menu.src = "../images/close.png";
     } 
     else{
         sideNav.style.right = "-250px";
         menu.src = "../images/menu.png";
     }
 }

let reviewTexts = document.getElementsByClassName("review-text");
let reviewPics = document.getElementsByClassName("review-pic");

function showReview(pic){
    for(reviewPic of reviewPics){
    reviewPic.classList.remove("active-pic");
    }
    for(reviewText of reviewTexts){    
    reviewText.classList.remove("active-text");
    }
    let i = Array.from(reviewPics).indexOf(pic);

    reviewPics[i].classList.add("active-pic");
    reviewTexts[i].classList.add("active-text");
}