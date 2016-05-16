//when color palate is clicked, change currentColorCircle to that color

var drawingArea = document.getElementById('drawingArea');
var brush = '#fff';
var currentColorCircle = document.getElementsByClassName('currentColor')[0];
var currentColor;
currentColorCircle.style.backgroundColor = '#78c0a8';


// functions that change the brush color and current color

var changeBrush = function(event) {
  brush = getComputedStyle(event.target).backgroundColor;
  currentColorCircle.style.backgroundColor = brush;
};



//grabbing elements and setting event listeners for changing //brush color



var aquamarine = document.getElementsByClassName('aquamarine')[0];
aquamarine.addEventListener('click', changeBrush);

var white = document.getElementsByClassName('white')[0];
white.addEventListener('click', changeBrush);

var cream = document.getElementsByClassName('cream')[0];
cream.addEventListener('click', changeBrush);

var orange = document.getElementsByClassName('orange')[0];
orange.addEventListener('click', changeBrush);

var puke = document.getElementsByClassName('puke')[0];
puke.addEventListener('click', changeBrush);

var pinkRed = document.getElementsByClassName('pinkRed')[0];
pinkRed.addEventListener('click', changeBrush);

var blue = document.getElementsByClassName('blue')[0];
blue.addEventListener('click', changeBrush);

var olive = document.getElementsByClassName('olive')[0];
olive.addEventListener('click', changeBrush);

var brown = document.getElementsByClassName('brown')[0];
brown.addEventListener('click', changeBrush);

var grey = document.getElementsByClassName('grey')[0];
grey.addEventListener('click', changeBrush);

var eraser = document.getElementsByClassName('eraser')[0];
eraser.addEventListener('click', changeBrush);



//loop to create divs and add event listeners to each div
for (var x = 0; x < 1188; x++) {
  var pixel = document.createElement('div');
  pixel.className = "pixel";
  pixel.addEventListener('click', function(event) {
    event.target.style.backgroundColor = brush;
    console.log(brush);
  });
  drawingArea.appendChild(pixel);
};
