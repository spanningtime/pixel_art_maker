

var drawingArea = document.getElementById('drawingArea');
// click on a color from palette
// change brush color to that color
var brush = '#fff'

var changeBrush = function() {
  brush = "#78c0a8"
};

var aquamarine = document.getElementsByClassName('aquamarine')[0];
aquamarine.addEventListener('click', changeBrush);








for (var x = 0; x < 1188; x++) {
  var pixel = document.createElement('div');
  pixel.className = "pixel";
  pixel.addEventListener('click', function(event) {
    event.target.style.backgroundColor = brush;

  });
  drawingArea.appendChild(pixel);
};
