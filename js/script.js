/*TO DO LIST
5. add animated bubbles to player one
6. add sound
*/

var canvas;
var ctx;
var x = 350; //horizontal
var y = 650; //vertical 
var dx = 8; //volocity speed
var dy = 8; 
var w = 30;
var h = 40;
var cW;
var cH;
var player1;
var scorebored= document.getElementById("scorebored");
var score = 0;
var r = 35;
var fish = [
       { "id":"little1", "x":100,"y":-20,"w":90,"h":90, "r": 70, "ox":100,"oy":-20,"ow":90,"oh":90, "or": 70},
       { "id":"little2", "x":525,"y":-50,"w":20,"h":20, "r": 20, "ox":525,"oy":-50,"ow":20,"oh":20, "or": 20},
       { "id":"little3", "x":350,"y":-160,"w":20,"h":20, "r": 20, "ox":350,"oy":-160,"ow":20,"oh":20, "or": 20},
       { "id":"little4", "x":450,"y":-190,"w":30,"h":30, "r": 30, "ox":450,"oy":-190,"ow":30,"oh":30, "or": 30},
       { "id":"little5", "x":150,"y":-230,"w":80,"h":80, "r": 60, "ox":150,"oy":-230,"ow":80,"oh":80, "or": 60},
       { "id":"little6", "x":550,"y":-370,"w":35,"h":35, "r": 35, "ox":550,"oy":-300,"ow":35,"oh":35, "or": 35},
       { "id":"little7", "x":350,"y":-420,"w":40,"h":40, "r": 50, "ox":350,"oy":-320,"ow":40,"oh":40, "or": 40},
       { "id":"little8", "x":250,"y":-530,"w":70,"h":70, "r": 50, "ox":250,"oy":-390,"ow":70,"oh":70, "or": 50},

        ];
window.onload =function() {
    window.addEventListener('keydown', pressArrowKeys, true);
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext("2d");
    cW = ctx.canvas.width;
    cH = ctx.canvas.height;
   /* return setInterval(draw, 20); *///calls draw function
console.log("loaded");
}


//fishes swim down screen
function renderFish(){
    for(var i = 0; i < fish.length; i++){
        var enemy = document.getElementById("enemy");
        ctx.drawImage(enemy, fish[i].x , fish[i].y+=.8, fish[i].w, fish[i].h);
      

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
   // IF FISH EATEN IT GET BIGGER AND RESPOND RANDOMLY ON THE PAGE
    fish.x = Math.floor((Math.random() * 690) + 1);
    fish.y = -45;
     fish.w += 10;
    fish.h += 10;
    fish.r += 5;
   

    CheckForSize(fish);
    //fish gets too far it will come back AND COME BAKC A LITLE BIGGER
  } else if(distance > 1100){
    fish.y = -45;
    fish.x = Math.floor((Math.random() * 690) + 1);
     fish.w += 1;
    fish.h += 1;
    fish.r += 1;
  }
  // CheckForSize();
  return distance;
};

function endGame(){
  score = 0;
  x = 350;
  y = 650;
  w = 30;
  h = 40;
  r = 45;
   scorebored.textContent = "Score: " + score;
   //ADD THE SIZE BACK TO ORIGINAL SIZE
   for(var i = 0; i < fish.length; i++){
      fish[i].x = fish[i].ox; 
      fish[i].y = fish[i].oy; 
      fish[i].w = fish[i].ow; 
      fish[i].h = fish[i].oh; 
      fish[i].r = fish[i].or; 
      }
}

//check size of fish
var CheckForSize = function(fish){
    if ( fish.w > w && fish.h > h){
      console.log ('gulp!');
      alert("game over");
      endGame();
      // newGame();
    }else /*(fish[i].w < w && fish[i].h < h) */{
      w += 4;
      h += 4;
      r += 3;
      score += 1;
     
      console.log(fish);
      //ADD SCORE
      scorebored.textContent = "Score: " + score;
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

 setInterval(draw, 30); 

