//when color palate is clicked, change currentColorCircle to that color

var drawingArea = document.getElementById('drawingArea');
var brush = '#fff';
var currentColorCircle = document.getElementsByClassName('currentColor')[0];
var currentColor;
currentColorCircle.style.backgroundColor = "#fff";


// functions that change the brush color and current color
var changeBrushAqua = function() {
  brush = '#78c0a8';
  currentColorCircle.style.backgroundColor = brush
};

var changeBrushWhite = function() {
  brush = '#fff';
  currentColorCircle.style.backgroundColor = brush
};

var changeBrushCream = function() {
  brush = '#fcebb6';
  currentColorCircle.style.backgroundColor = brush
};

var changeBrushOrange = function() {
  brush = '#f07818';
  currentColorCircle.style.backgroundColor = brush
};

var changeBrushMustard = function() {
  brush = '#f0a830';
  currentColorCircle.style.backgroundColor = brush
};

var changeBrushPuke = function() {
  brush = '#c8bd27';
  currentColorCircle.style.backgroundColor = brush
};

var changeBrushPinkRed = function() {
  brush = '#ce5050';
  currentColorCircle.style.backgroundColor = brush
}

var changeBrushBlue = function() {
  brush = '#444c74';
  currentColorCircle.style.backgroundColor = brush
}

var changeBrushOlive = function() {
  brush = '#456b32';
  currentColorCircle.style.backgroundColor = brush
}

var changeBrushBrown = function() {
  brush = '#674c19';
  currentColorCircle.style.backgroundColor = brush
}

var changeBrushGrey = function() {
  brush = '#787373';
  currentColorCircle.style.backgroundColor = brush
}

var changeBrushEraser = function() {
  brush = '#000';
  currentColorCircle.style.backgroundColor = brush
}



//grabbing elements and setting event listeners for changing //brush color
var aquamarine = document.getElementsByClassName('aquamarine')[0];
aquamarine.addEventListener('click', changeBrushAqua);

var white = document.getElementsByClassName('white')[0];
white.addEventListener('click', changeBrushWhite);

var cream = document.getElementsByClassName('cream')[0];
cream.addEventListener('click', changeBrushCream);

var orange = document.getElementsByClassName('orange')[0];
orange.addEventListener('click', changeBrushOrange);

var mustard = document.getElementsByClassName('mustard')[0];
mustard.addEventListener('click', changeBrushMustard);

var puke = document.getElementsByClassName('puke')[0];
puke.addEventListener('click', changeBrushPuke);

var pinkRed = document.getElementsByClassName('pinkRed')[0];
pinkRed.addEventListener('click', changeBrushPinkRed);

var blue = document.getElementsByClassName('blue')[0];
blue.addEventListener('click', changeBrushBlue);

var olive = document.getElementsByClassName('olive')[0];
olive.addEventListener('click', changeBrushOlive);

var brown = document.getElementsByClassName('brown')[0];
brown.addEventListener('click', changeBrushBrown);

var grey = document.getElementsByClassName('grey')[0];
grey.addEventListener('click', changeBrushGrey);

var eraser = document.getElementsByClassName('eraser')[0];
eraser.addEventListener('click', changeBrushEraser);



//loop to create divs and add event listeners to each div
for (var x = 0; x < 1188; x++) {
  var pixel = document.createElement('div');
  pixel.className = "pixel";
  pixel.addEventListener('click', function(event) {
    event.target.style.backgroundColor = brush;

  });
  drawingArea.appendChild(pixel);
};
