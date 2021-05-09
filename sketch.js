var form, game, player;
var database;
var player, form, game;
var GS = 0;
var pCount = 0;
var allPlayers ;
var p1, p2;
var cars;
var wCar, rCar;
var finished=false;
//var bCar, lCar;
var Ground;
var Track;
var finishedPlayers=0;
function preload(){
wCar = loadImage("Images/car1.png");
rCar = loadImage("Images/car2.png");
Ground = loadImage("Images/ground.png");
Track = loadImage("Images/track.jpg");
}
function setup(){
    createCanvas(displayWidth, displayHeight);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}
function draw(){
    background(255);
    if(pCount===2 && finishedPlayers===0){
        game.updateState(1);
    }
   if(GS===1){
       clear();
       game.play();
   }
   if(finishedPlayers===2){
       game.updateState(2);
   }
   if(GS===2 && finishedPlayers===2){
       game.end()
   }
}