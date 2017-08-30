// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
    var x = document.getElementById("navSmall");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

//
var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("pic-slides");
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex ++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 5000);
}
