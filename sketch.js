var hypnoticBall;
var database;
function setup(){
    database = firebase.database();
    createCanvas(500,500);
    hypnoticBall = createSprite(250,250,10,10);
    hypnoticBall.shapeColor = "red";

    //reading value of ball/position from firebase
    //()=>{} arrow function
    // .on listener/reader
    database.ref('ball/position').on("value", (data)=>{
        position = data.val();
        hypnoticBall.x = position.x;
        hypnoticBall.y = position.y;
    } );
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    database.ref('ball/position').set({
        'x': position.x + x,
        'y': position.y + y
    })
   
}
