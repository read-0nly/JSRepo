
//It's nice to be able to enumerate by type as well, so lets make some helper objects for that
actors = new Array()
enemies = new Array()
rays = new Array()
walls = new Array()
floors = new Array()

//Create player and add to list of actors
player = new Player(1,1,1,3,"player",null,100,1,keys)
actors.push(player)

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

function initGame(){
	initEngine(mapAutoGen())
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