function check(e) {
  debugElem.innerHTML = keys[e.keyCode];
  if(player.keys[e.keyCode][1]=="PlayerMovement"){
		doMove(player.keys[e.keyCode], player)
	}
  if(player.keys[e.keyCode][1]=="PlayerAction"){
		doAction(player.keys[e.keyCode], player)
	}
}

window.addEventListener('keyup',this.check,false);

function doMove(dir, actor){
	switch(dir[0]){
	case "Up":
		if(boundaryCheck(actor.x,actor.y-1, actor.z)){
			if(collisionCheck(actor.x,actor.y-1, actor.z)){
				actor.y--;
			}
			else{
				
			}
		}
		else{
			if(wrap){
				if(boundaryCheck(actor.x, mapLayers[1]-1, actor.z)){
					if(collisionCheck(actor.x, mapLayers[1]-1, actor.z)){
						actor.y=mapLayers[1]-1;
					}
					else{
						
					}
				}
			}
		}		
		actor.dir = 1
		break;
	case "Down":
		if(boundaryCheck(actor.x,actor.y+1, actor.z) ){
			if( collisionCheck(actor.x,actor.y+1, actor.z)){
				actor.y++;
			}
			else{
				
			}
		}
		else{
			if(wrap){
				if(boundaryCheck(actor.x, 0, actor.z)){
					if(collisionCheck(actor.x, 0, actor.z)){
						actor.y=0;
					}
					else{
						
					}
				}
			}
		}
		actor.dir = 3
		break;
	case "Left":
		if(boundaryCheck(actor.x-1,actor.y, actor.z)){
			if( collisionCheck(actor.x-1,actor.y, actor.z)){
				actor.x--;
			}
			else{
				
			}
		}
		else{
			if(wrap){
				if(boundaryCheck(mapLayers[0]-1, actor.y, actor.z)){
					if(collisionCheck(mapLayers[0]-1, actor.y, actor.z)){
						actor.x=mapLayers[0]-1;
					}
					else{
						collisionAction(
					}
				}
			}
		}
		actor.dir = 4
		break;
	case "Right":
		if(boundaryCheck(actor.x+1,actor.y, actor.z)){
			if(collisionCheck(actor.x+1,actor.y, actor.z)){
				actor.x++;
			}
			else{
				
			}
		}
		else{
			if(wrap){
				if(boundaryCheck(0, actor.y, actor.z)){
					if(collisionCheck(0, actor.y, actor.z)){
						actor.x=0;
					}
					else{
						
					}
				}
			}
		}
		actor.dir = 2
		break;	
	}
}
