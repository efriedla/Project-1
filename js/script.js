/*TO DO LIST
  MAKE OTHER FISH INTO CIRCLES SO I CAN CHECK IF THE FISH HAS HIT THE RADIUS
  - FIGURE OUT HOW TO REGENERATE THE FISH ARRAY
  GAME OVER TO RESTART GAME
  
*/

var canvas;
var ctx;
var x = 350; //horizontal
var y = 650; //vertical 
var dx = 8; //volocity speed
var dy = 8; 
var w = 30;
var h = 50;
var cW;
var cH;
var player1;
var r = 45;
var fish = [
       { "id":"little1", "x":100,"y":-20,"w":90,"h":90, "r": 90},
       { "id":"little2", "x":525,"y":-50,"w":20,"h":20, "r": 20},
       { "id":"little3", "x":350,"y":-160,"w":20,"h":20, "r": 20},
       { "id":"little4", "x":450,"y":-190,"w":50,"h":50, "r": 50},
       { "id":"little5", "x":150,"y":-230,"w":50,"h":50, "r": 50},
       { "id":"little6", "x":550,"y":-370,"w":50,"h":50, "r": 50},
       { "id":"little7", "x":350,"y":-420,"w":50,"h":50, "r": 50},
       { "id":"little8", "x":250,"y":-530,"w":50,"h":50, "r": 50},

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


//fishes swim down screen
function renderFish(){
    for(var i = 0; i < fish.length; i++){
        var enemy = document.getElementById("enemy");
      
        ctx.drawImage(enemy, fish[i].x, fish[i].y+=1, fish[i].w, fish[i].h);
    
    }
    //console.log("enemy fish x=" + fish[0].x + ", y=" + fish[0].y);
}
function renderPlayer1(){
  var fish2 = document.getElementById('fish2');
    ctx.drawImage(fish2, x, y, w, h);
  
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

//check for collision
var checkForCollision = function(x1, y1, fish) {
  var xDistance = fish.x - x1;
  var yDistance = fish.y - y1;

  var distance = Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
  if (distance < fish.r) {
    fish.x = Math.floor((Math.random() * 690) + 1);
    fish.y = -25;
    CheckForSize(fish);
    
  }
  // CheckForSize();
  return distance;
};

function newGame(){
  console.log("new game")
}
//check size of fish
var CheckForSize = function(fish){
    if ( fish.w > w && fish.h > h){
      console.log ('gulp!');
      alert("game over");
      // newGame();
    }else /*(fish[i].w < w && fish[i].h < h) */{
      w += 3;
      h += 3;
      r += 2;
      console.log("grew");
    /*  r += 10%;*/
    }
}


//main fish or circle
function draw() {

    ctx.clearRect(0, 0, cW, cH);
   checkForCollision(x, y, fish[0]);
   checkForCollision(x, y, fish[1]);
   checkForCollision(x, y, fish[2]);
   checkForCollision(x, y, fish[3]);
   checkForCollision(x, y, fish[4]);
   checkForCollision(x, y, fish[5]);
   checkForCollision(x, y, fish[6]);
   checkForCollision(x, y, fish[7]);
   renderPlayer1();
   renderFish();

}

