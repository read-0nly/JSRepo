//DOM references
debugElem=document.getElementById("debug");
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

//Base Parameters
var scale = 1;
var drawDelay = 500;
var wrap = true;

//TileMap definition (how do we chop up the image into separate tiles?)
var tileMap = {
	Width:30,
	Height:30,
	WScale:0,
	HScale:0,
	img : document.getElementById("tileset"),
	namedTiles : {
		"floor" : new Array(0,0),
		"wall" : new Array(30,0),
		"enemy": new Array(30,30),
		"player": new Array(60,30),
	}
};

//Define the default keyset (keycode: action, actiontype)
var keys = {
	/*
	[<-37][A-38][>-39][V-40]
	[space-32][ctrl-17][shift-16][alt-18]
	[z-90][x-88][c-67]
	[a-65][s-83][d-68]
	[q-81][w-87][e-69]
	[del-46][end-35][pgdwn-34]
	[ins-45][home-36][pgup-33]
	*/
	38:new Array("Up", "PlayerMovement"),
	40:new Array("Down", "PlayerMovement"),
	37:new Array("Left", "PlayerMovement"),
	39:new Array("Right", "PlayerMovement"),
	32:new Array("Jump", "PlayerMovement"),
	46:new Array("Fire", "PlayerAction"),
	45:new Array("Menu", "UIAction"),
}
//Initiate the engine - create the automap (as a demo) then initiate the Map Engine to start the draw loop
function initEngine(){
	map = mapAutoGen()
	initMapEngine(map)
}

//It's nice to be able to enumerate by type as well, so lets make some helper objects for that
actors = new Array()
enemies = new Array()
rays = new Array()
walls = new Array()
floors = new Array()

//Create player and add to list of actors
player = new Player(1,1,1,3,"player",null,100,1,keys)
actors.push(player)

//Define the array that will hold the current map
map = new Array()

//Base Atom is meant to be generic as all hell. As such, extended classes for tile types and item types shouldn't be defined there. The Engine Config is meant to sit on top of the mapengine and atom to create the rest of the game logic from those parts.

class Floor extends Tile{
	constructor(x,y){
		super(x,y,0,0,"floor",null)
		this.collisionLayers.push("Floor")
	}	
}
class Wall extends Tile{
	constructor(x,y){
		super(x,y,1,0,"wall",null)
		this.collisionLayers.push("Actor")
	}	
}

//Demo map generator
function mapAutoGen(){	
var mapWidth = 10;
var mapHeight= 10;
var mapDepth = 3;
var i = 0;
var mapBucket = new Array();
while(i<mapWidth){
	var rowBucket = new Array();
	var j = 0;
	while(j<mapHeight){
		var depthBucket = new Array();
		var k = 0;
		while(k<mapDepth){
			if(k==0){
				depthBucket.push(new Floor(i, j))
			}
			else if((j == 0 || i == 0) && k == 1){				
				depthBucket.push(new Wall(i, j))
			}
			else if((j == mapHeight-1 || i == mapWidth-1) && k == 1){				
				depthBucket.push(new Wall(i, j))
			}
			else{	
				var l = 0
				var actorFound = null
				while (l < actors.length){					
					if(i == actors[l].x && j == actors[l].y && k==1){
						actorFound = actors[l]
					}	
					l++;
				}
				depthBucket.push(actorFound)
			}
			k++;
		}
		rowBucket.push(depthBucket)
		j++;
	}
	
	mapBucket.push(rowBucket)
	i++;
}
return mapBucket
}