let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

/* ctx.fillStyle = "red";
ctx.fillRect(0,100,50,50);

ctx.fillStyle = "blue";
ctx.fillRect(0,50,50,50);

ctx.fillStyle = "white";
ctx.fillRect(50,50,50,50);

ctx.fillStyle = "yellow";
ctx.fillRect(50,0,50,50);

ctx.fillStyle = "green";
ctx.fillRect(100,0,50,50);

ctx.fillStyle = "pink";
ctx.fillRect(100,50,50,50);

ctx.fillStyle = "purple";
ctx.fillRect(50,100,50,50);

ctx.fillStyle = "grey";
ctx.fillRect(100,100,50,50); */


console.log(canvas);

let arr = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [4,0,0,3,1,1,1,1,0,0,0,0,0,0,0,0,0,0,2,1],
    [1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1],
    [1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1],
    [1,1,0,1,1,2,1,0,0,3,1,0,1,1,0,0,1,0,0,1],
    [1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1],
    [1,0,1,1,1,3,1,0,0,0,0,0,1,1,0,0,0,1,0,1],
    [1,0,0,0,0,0,1,2,1,0,1,1,1,2,0,1,0,1,3,1],
    [1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1],
    [1,1,0,1,1,0,0,0,0,0,1,3,1,0,0,0,0,0,0,1],
    [1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1],
    [1,1,0,1,1,0,1,1,1,0,3,1,2,0,1,0,0,0,0,1],
    [1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1],
    [1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1],
    [1,0,1,0,1,1,1,1,1,1,0,2,1,0,1,0,0,1,0,1],
    [1,2,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1],
    [1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,3,1],
    [1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1],
    [1,3,0,1,1,0,0,0,0,0,2,1,1,0,0,0,0,1,1,1],
    [1,1,1,1,1,1,1,1,5,1,1,1,1,1,1,1,1,1,1,1]

    
]
let walk = 0;
let stone = 1;
let die = 2;
let dia = 3
let player = 4;
let exit = 5;
let playerPosition = {x:0, y:0};
let tileSize = 50;


let pic = new Image();
pic.src='img/player.png';

let block = new Image();
block.src='img/block.png';

let grass = new Image();
grass.src='img/grass.png';

let death = new Image();
death.src='img/death.png';

let diamond = new Image();
diamond.src='img/diamond.png';

let portal = new Image();
portal.src='img/portal.png';

let skeleton = new Image();
skeleton.src='img/skeleton.png';

function sound(){
let gamesound = new Audio ("gamesounds/walk.wav");

gamesound.play();
}
function dying(){
    let gamesound = new Audio ("gamesounds/death-sound.mp3");
    
    gamesound.play();
    }
function points(){
let gamesound = new Audio ("gamesounds/points.mp3");

    gamesound.play();
}


function drawMaze(){

for(let x = 0; x < arr.length; x++){

    for(let y = 0; y < arr[x].length; y++){

      if (arr[x][y] == walk){
            console.log("3 er ramt")
            ctx.drawImage(grass,x*tileSize,y*tileSize,tileSize,tileSize);
    }

  else  if(arr[x][y] == stone){
        console.log("1 er ramt")
        ctx.drawImage(block,x*tileSize,y*tileSize,tileSize,tileSize);
    }

else if(arr[x][y] == die){
        console.log("2 er ramt")
        ctx.drawImage(death,x*tileSize,y*tileSize,tileSize,tileSize);
    
}

else if(arr[x][y] == dia){
    console.log("2 er ramt")
    ctx.drawImage(diamond,x*tileSize,y*tileSize,tileSize,tileSize);

}
else if(arr[x][y] == exit){
    console.log("2 er ramt")
    ctx.drawImage(portal,x*tileSize,y*tileSize,tileSize,tileSize);

}
     else if(arr[x][y] == player){
        playerPosition.x = x;
        playerPosition.y = y;
        console.log("4 er ramt");
        ctx.drawImage(pic,x*tileSize,y*tileSize,tileSize,tileSize);
    }
    


}
}
}

document.addEventListener("keyup", function(event){

    //Walking
    if(event.keyCode == 37){
    if(arr[playerPosition.x -1][playerPosition.y] == walk){
        arr[playerPosition.x -1][playerPosition.y] = player
            arr[playerPosition.x][playerPosition.y] = walk
        sound();
        }
        //Point
else if(arr[playerPosition.x -1][playerPosition.y] == dia){
        arr[playerPosition.x -1][playerPosition.y] = player
            arr[playerPosition.x][playerPosition.y] = walk
        points();
        
    }
    drawMaze();
}


        if(event.keyCode == 38){
            //Walking
            if(arr[playerPosition.x][playerPosition.y -1] == walk){
                arr[playerPosition.x][playerPosition.y -1] = player
                    arr[playerPosition.x][playerPosition.y] = walk
                    sound();
                }
                //Point
                else if(arr[playerPosition.x][playerPosition.y -1] == dia){
                        arr[playerPosition.x][playerPosition.y -1] = player
                            arr[playerPosition.x][playerPosition.y] = walk
                            points();
                            drawMaze();
            
    }
}
    if(event.keyCode == 39){
        //Walking
        if(arr[playerPosition.x +1][playerPosition.y] == walk){
            arr[playerPosition.x +1][playerPosition.y] = player
                arr[playerPosition.x][playerPosition.y] = walk
                sound();
            }
            //Point
                else if (arr[playerPosition.x +1][playerPosition.y] == dia){
                    arr[playerPosition.x +1][playerPosition.y] = player
                        arr[playerPosition.x][playerPosition.y] = walk
                        points();
        }
        drawMaze();
}

if(event.keyCode == 40){
    //Walking
    if(arr[playerPosition.x][playerPosition.y +1] == walk){
        arr[playerPosition.x][playerPosition.y +1] = player
            arr[playerPosition.x][playerPosition.y] = walk
            sound();
        }
        //Point
   else if(arr[playerPosition.x][playerPosition.y+1] == dia){
            arr[playerPosition.x][playerPosition.y+1] = player
                arr[playerPosition.x][playerPosition.y] = walk
                points();   
    }
    drawMaze();
}




if(event.keyCode ==37){
    console.log("Du har trykket på left")
    
}
if(event.keyCode ==38){
    console.log("Du har trykket på up")

}
if(event.keyCode ==39){
    console.log("Du har trykket på right")
    
}
if(event.keyCode ==40){
    console.log("Du har trykket på down")
   
}
/*
left: 37
up: 38
right: 39
down: 40
*/
})

window.addEventListener("load", drawMaze);
