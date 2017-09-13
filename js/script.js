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
var fish = [
       { "id":"enemy1", "x":100,"y":-20,"w":20,"h":10},
       { "id":"enemy2", "x":525,"y":-50,"w":40,"h":20},
       { "id":"enemy1", "x":350,"y":-160,"w":40,"h":20},
       { "id":"enemy1", "x":450,"y":-190,"w":100,"h":50},
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

  var dngrZone = Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
  if (dngrZone < 25) {
    fish.x = Math.floor((Math.random() *690) + 1);
    fish.y = -5;
    CheckForSize();
    console.log ('gulp!');
  }
  // CheckForSize();
  return dngrZone;
};

//check size of fish
var CheckForSize = function(width, height, fishy){
  for(var i = 0; i < fish.length; i++){
      if ( fish[i].w > w && fish[i].h > h){
        alert("game over");
      }else if(fish[i].w < w && fish[i].h < h) {
        w += 3;
        h += 3;
      }
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

