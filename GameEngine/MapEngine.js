//Set the scale factor and initiate the draw loop
function initMapEngine(map){
	tileMap.WScale = tileMap.Width * scale;
	tileMap.HScale = tileMap.Height * scale;
	drawLoop = setInterval(drawMap.bind(map), drawDelay, map);
}

//First step of drawing a frame - pull the rows and draw each row
function drawMap(mapArr){
	var i = 0;
	while(i<mapArr.length){
		if((typeof mapArr[i]) != "undefined" && mapArr[i] != null ){
			drawRow(mapArr[i], i);
		}
		i++;
	}
}

//In each row, pull each stack and draw the stack
function drawRow(rowArr, rowIndex){
	var i = 0;
	while(i<rowArr.length){
		if((typeof rowArr[i]) != "undefined" && rowArr[i] != null ){
			drawStack(rowArr[i],i, rowIndex);
			
		}
		i++;
	}
}

//in each stack, draw the atoms from lowest to highest
function drawStack(colArr, colIndex, rowIndex){
	var i = 0;
	while(i<colArr.length){
		if((typeof colArr[i]) != "undefined" && colArr[i] != null ){
			drawTile(tileMap.namedTiles[colArr[i].tile], tileMap.WScale * colIndex, tileMap.HScale * rowIndex)

		}
		i++;
	}
}

//draw the tile associated with the atom at the respective location
function drawTile(tilePoint,x,y){  
  ctx.drawImage(tileMap.img,tilePoint[0], tilePoint[1],tileMap.Width,tileMap.Height,x,y,tileMap.WScale, tileMap.HScale);
}

//Check if the target is occupied
function collisionCheck(x,y,z){
	if ((typeof map[x]) != "undefined" ){
		if((typeof map[x][y]) != "undefined"){
			if((typeof map[x][y][z]) != "undefined" && (typeof map[x][y][z]) == null){				
				return true;
			}
			else{
				return false
			}
		}
		else{
			return false
		}
	}
	else{
		return false
	}
}
//check if the target is in bounds
function boundaryCheck(x, y, z){
	if ((typeof map[x]) != "undefined" ){
		if((typeof map[x][y]) != "undefined"){			
			if((typeof map[x][y][z]) != "undefined"){			
				return true;
			}
			else{
				return false
			}
		}
		else{
			return false
		}
	}
	else{
		return false
	}
}