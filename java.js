
// one page navigation-----------------------------------------------------------------------
const li = document.querySelectorAll(".lnk");
const sec = document.querySelectorAll("section");
function activemenu() {
    let len = sec.length;
    while (--len && window.scrollY + 97 < sec[len].offsetTop) { }
    li.forEach(ltx => ltx.classList.remove("active"));
    li[len].classList.add("active");
}
activemenu();
window.addEventListener("scroll", activemenu);


// Top button and navigation-----------------------------------------------------------------------
//Get the button:
mybutton = document.getElementById("myBtn");
nav = document.getElementById("main");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
    nav.style.display = "block";
  } else {
    nav.style.display = "none";
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

