$(document).ready(function() {
var s = window.screen;
var width = 1370;
var height = 400;
var yPositions = Array(300).join(0).split('');
var ctx = q.getContext('2d');
var draw = function() {
ctx.fillStyle = 'rgba(0,0,0,.1)';
ctx.fillRect(0, 0, width, height);
ctx.fillStyle = '#0F0';
ctx.font = '10pt Georgia';
yPositions.map(function(y, index) {
text = String.fromCharCode(1e2 + Math.random() *
33);
x = (index * 10) + 10;
q.getContext('2d').fillText(text, x, y);
if (y > 100 + Math.random() * 1e4) {
yPositions[index] = 0;
} else {
yPositions[index] = y + 10;
}
});
};
RunMatrix();

function RunMatrix() {
if (typeof Game_Interval != "undefined") clearInterval(
Game_Interval);
Game_Interval = setInterval(draw, 70);
}

function StopMatrix() {
clearInterval(Game_Interval);
}
setInterval(draw, 200);
});
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
