var body = document.getElementsByTagName('body')[0];
var container = document.getElementById('container');
var brush = "";
var brushColor = document.getElementById('brushColor');
var xCord = '';
var yCord = '';

for (var i = 0; i < 2100; i++) {
  var tile = document.createElement('div');

  tile.style.borderStyle= 'solid'
  tile.style.paddingBottom= '2%'
  tile.style.borderWidth = 'thin';
  tile.style.width= '2%';
  tile.style.boxSizing = 'border-box'
  tile.style.float= 'left';

  container.appendChild(tile);
  }

container.addEventListener('mousedown', function(event) {
  xCord = event.x;
  yCord = event.y;
})
container.addEventListener('mouseup', function(event) {
  if(xCord == event.x && yCord == event.y) {
    event.target.style.backgroundColor = brush;
  } 

//else {     //saving to set up drag/draw function
  //   console.log("IN THE ELSE");
  // }

});
black.addEventListener('click', function (event) {
  brush = 'black'
  brushColor.style.backgroundColor = brush;
});
white.addEventListener('click', function (event) {
  brush = 'white'
  brushColor.style.backgroundColor = brush;
});
green.addEventListener('click', function (event) {
  brush = 'green'
  brushColor.style.backgroundColor = brush;
  });
yellow.addEventListener('click', function (event) {
  brush = 'yellow'
  brushColor.style.backgroundColor = brush;
});
grey.addEventListener('click', function (event) {
  brush = 'grey'
  brushColor.style.backgroundColor = brush;
});
blue.addEventListener('click', function (event) {
  brush = 'blue'
  brushColor.style.backgroundColor = brush;
});
brown.addEventListener('click', function (event) {
  brush = 'brown'
  brushColor.style.backgroundColor = brush;
});
orange.addEventListener('click', function (event) {
  brush = 'orange'
  brushColor.style.backgroundColor = brush;
});
red.addEventListener('click', function (event) {
  brush = 'red'
  brushColor.style.backgroundColor = brush;
});
