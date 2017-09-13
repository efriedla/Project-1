var canvas;
var ctx;
var x = 350; //horizontal
var y = 650; //vertical 
var dx = 8; //volocity speed
var dy = 8; 
var cW;
var cH;
var player1;
var fish = [
       { "id":"enemy1", "x":100,"y":-20,"w":20,"h":10},
       { "id":"enemy2", "x":525,"y":-50,"w":40,"h":20},
       { "id":"enemy1", "x":350,"y":-160,"w":40,"h":20},
       { "id":"enemy1", "x":450,"y":-190,"w":40,"h":20},
       { "id":"enemy1", "x":150,"y":-230,"w":40,"h":20},
       { "id":"enemy1", "x":550,"y":-370,"w":40,"h":20},
       { "id":"enemy1", "x":350,"y":-420,"w":40,"h":20},
       { "id":"enemy1", "x":250,"y":-530,"w":40,"h":20}

        ];
window.onload =function() {
    window.addEventListener('keydown', pressArrowKeys, true);
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext("2d");
    cW = ctx.canvas.width;
    cH = ctx.canvas.height;
    return setInterval(draw, 20); //calls draw function
console.log("loaded");
}

//make a for loop where enemies come down at differenct times shapes and sizes
/*function makeFish(){
    for(var i = 0; i < 10; i++){
        ctx.fillStyle = "red";
        Math.random*650

    }
}*/

//fishes swim down screen
function renderFish(){
    for(var i = 0; i < fish.length; i++){
       
        ctx.fillStyle = "orange";
        ctx.fillRect(fish[i].x, fish[i].y+=1, fish[i].w, fish[i].h);

     //   console.log (x, y);     
    }
}
function renderPlayer1(){
  var fish2 = document.getElementById('fish2');
    ctx.drawImage(fish2, x, y, 30, 50);
  
}


function getPlayerPos (canva, evt){

}

function pressArrowKeys (e) {
    switch(e.keyCode){
        case 38: //up
            y -= dy;
            break;
        case 40: //down
            y += dy;
            break;
        case 37: //left
            x -= dx;
            break;
        case 39: //right
            x += dx;
            break;

    }
}
//collision
function Fishes(x, y, radius, color){
    this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;

  this.update = function() {
    
    this.draw();
  };

  this.draw = function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);  
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  };
}
let enimies1;
function init(){
  enemies1 = new Fishes(100, 15, 25, "orange");

}

//check for collision
var checkForCollision = function(x1, y1, fish) {
  var xDistance = fish.x - x1;
  var yDistance = fish.y - y1;
  var dngrZone = Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
  if (dngrZone < 25) {
    fish.x = 450;
    fish.y = -1;
    console.log ('gulp!');
  }
  return dngrZone;
};


//main fish or circle
function draw() {
    ctx.clearRect(0, 0, cW, cH);
   renderPlayer1();
   checkForCollision(x, y, fish[0]);
   renderFish();

}

init();
