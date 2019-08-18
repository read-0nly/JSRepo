function check(e) {
/*
[<-37][A-38][>-39][V-40]
[space-32][ctrl-17][shift-16][alt-18]
[z-90][x-88][c-67]
[a-65][s-83][d-68]
[q-81][w-87][e-69]
[del-46][end-35][pgdwn-34]
[ins-45][home-36][pgup-33]
*/
  document.getElementById("TileInfo").innerHTML = keys[e.keyCode];
  if(keys[e.keyCode][1]="PlayerMovement"){
	doMove(keys[e.keyCode], player)
	}
}

window.addEventListener('keyup',this.check,false);

function doMove(dir, actor){
	destroyActor(actor)
	switch(dir[0]){
	case "Up":
		if(boundaryCheck(actor.x,actor.y-1)){
			if(collisionCheck(actor.x,actor.y-1)){
				actor.y--;
			}
		}
		else{
			if(wrap){
				if(boundaryCheck(actor.x, mapLayers[1]-1)){
					if(collisionCheck(actor.x, mapLayers[1]-1)){
						actor.y=mapLayers[1]-1;
					}
				}
			}
		}		
		actor.dir = 1
		break;
	case "Down":
		if(boundaryCheck(actor.x,actor.y+1) ){
			if( collisionCheck(actor.x,actor.y+1)){
				actor.y++;
			}
		}
		else{
			if(wrap){
				if(boundaryCheck(actor.x, 0)){
					if(collisionCheck(actor.x, 0)){
						actor.y=0;
					}
				}
			}
		}
		actor.dir = 3
		break;
	case "Left":
		if(boundaryCheck(actor.x-1,actor.y)){
			if( collisionCheck(actor.x-1,actor.y)){
				actor.x--;
			}
		}
		else{
			if(wrap){
				if(boundaryCheck(mapLayers[0]-1, actor.y)){
					if(collisionCheck(mapLayers[0]-1, actor.y)){
						actor.x=mapLayers[0]-1;
					}
				}
			}
		}
		actor.dir = 4
		break;
	case "Right":
		if(boundaryCheck(actor.x+1,actor.y)){
			if(collisionCheck(actor.x+1,actor.y)){
				actor.x++;
			}
		}
		else{
			if(wrap){
				if(boundaryCheck(0, actor.y)){
					if(collisionCheck(0, actor.y)){
						actor.x=0;
					}
				}
			}
		}
		actor.dir = 2
		break;	
	}
}
function collisionCheck(x,y){
	if(mapLayers[4].substring(y*mapLayers[0]+x,y*mapLayers[0]+x+1) == " "){
		return true;
	}
	else{		
		return false;
	}
}
function boundaryCheck(x, y){
	if (x >= 0 && x < mapLayers[0] && y >= 0 && y < mapLayers[1]){
		return true;
	}
	else{
		return false
	}
}
function destroyActor(actor){
	var lineLen=mapLayers[0]
	var newInd = (lineLen*actor.y)+actor.x;
	mapLayers[4] = mapLayers[4].substring(0, newInd) + " " + mapLayers[4].substring(newInd+1);
}
function mapActor(actor){
	var lineLen=mapLayers[0]
	var newInd = (lineLen*actor.y)+actor.x;
	mapLayers[actor.z+3] = mapLayers[actor.z+3].substring(0, newInd) + actor.sprite + mapLayers[actor.z+3].substring(newInd+1);
}
