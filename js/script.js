var canvas;
var ctx;
var x = 350; //horizontal
var y = 650; //vertical 
var dx = 8; //volocity speed
var dy = 8; 
var cW;
var cH;
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
    return setInterval(draw, Math.floor((Math.random() * 20) + 5)); //calls draw function
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
       
    }
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
//main fish or circle
function draw() {
    ctx.clearRect(0, 0, cW, cH);
    renderFish();
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, 2 * Math.PI);
    ctx.stroke();
}

