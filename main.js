
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("nav");
var sticky = navbar.offsetTop;
var changeColorPoint = 50;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }

    if (window.pageYOffset > changeColorPoint) {
        navbar.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
        navbar.style.backgroundColor = "white";
        navbar.style.paddingLeft ="60px";
        navbar.style.paddingRight ="60px";
    } else {
        navbar.style.boxShadow = "";
        navbar.style.backgroundColor = "transparent";
    }
}
const btn = document.getElementById('btn');
btn.addEventListener('click', function() {
    // display alert dialog when mouse enters the button
    alert('Thank You! please enter your details');
});
