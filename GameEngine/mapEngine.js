
function initEngine(){
	tileMap.WScale = tileMap.Width * scale;
	tileMap.HScale = tileMap.Height * scale;
	drawLoop = setInterval(drawMap, 500);
}
function drawTile(tilePoint,x,y){  
  ctx.drawImage(tileMap.img,tilePoint[0], tilePoint[1],tileMap.Width,tileMap.Height,x,y,tileMap.WScale, tileMap.HScale);
}
function drawRow(mapString, rowIndex){
	var i = 0;
	while(i<mapString.length){
		if(tileMap.namedTiles[mapString[i]] != null){
			drawTile(tileMap.namedTiles[mapString[i]], tileMap.WScale * i, tileMap.HScale * rowIndex)
		}
		i++;
	}
}
function drawLayer(layer, x, y){
	var i = 0;
	while(i<y){
		drawRow(layer.substring((i*x),x+(i*x)), i)
		i++;
	}
}
function drawMap(){
	
	var i = 0;
	while(i<actors.length){
		mapActor(actors[i], mapLayers[actors[i].z])
		i++;
	}
	
	var i = 0;
	while(i<(mapLayers[2]-1)){
		drawLayer(mapLayers[i+3], mapLayers[0],mapLayers[1])
		i++;
	}
}