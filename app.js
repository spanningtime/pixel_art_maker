//if white palette clicked after aqua palette change brush to white

var drawingArea = document.getElementById('drawingArea');
var brush = '#fff';

var changeBrushAqua = function() {
  brush = '#78c0a8';
};

var changeBrushWhite = function() {
  brush = '#fff';
};

var changeBrushCream = function() {
  brush = '#fcebb6';
};

var changeBrushOrange = function() {
  brush = '#f07818';
};

var changeBrushMustard = function() {
  brush = '#f0a830';
};

var changeBrushPuke = function() {
  brush = '#c8bd27';
};

var changeBrushPinkRed = function() {
  brush = '#ce5050';
}

var changeBrushBlue = function() {
  brush = '#444c74';
}

var changeBrushOlive = function() {
  brush = '#456b32';
}

var changeBrushBrown = function() {
  brush = '#674c19';
}

var changeBrushGrey = function() {
  brush = '#787373';
}

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








for (var x = 0; x < 1188; x++) {
  var pixel = document.createElement('div');
  pixel.className = "pixel";
  pixel.addEventListener('click', function(event) {
    event.target.style.backgroundColor = brush;

  });
  drawingArea.appendChild(pixel);
};
