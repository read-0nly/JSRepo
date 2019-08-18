var x = 0;
var y = 0;
var scale = 0.5;
var drawLoop = null;
var wrap = true
var tileMap = {
	Width:30,
	Height:30,
	WScale:0,
	HScale:0,
	img : document.getElementById("tileset"),
	namedTiles : {
		"1" : new Array(0,30),
		"2" : new Array(30,30),
		"3": new Array(60,30),
		"4": new Array(90,30),
		"_": new Array(0,0),
		"#": new Array(30,0),
		"~": new Array(60,0)
	}
};
var player = {
	x: 1,
	y: 1,
	z: 1,
	dir: 0,
	sprite: "3"
}
var enemy = {
	x: 4,
	y: 3,
	z: 1,
	dir: 0,
	sprite: "4"
}
var actors= new Array();
actors.push(player);
actors.push(enemy);
var keys = {
	38:new Array("Up", "PlayerMovement"),
	40:new Array("Down", "PlayerMovement"),
	37:new Array("Left", "PlayerMovement"),
	39:new Array("Right", "PlayerMovement"),
	32:new Array("Jump", "PlayerMovement"),
	45:new Array("Fire", "PlayerAction"),
	45:new Array("Menu", "UIAction"),
}
var mapLayers = new Array(24,24,3,
"________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________",
"###########  ############                      ##                      ##                      ##                      ##                      ##                      ##                      ##                      ##                      ##         #  #         #                                                #         #  #         ##                      ##                      ##                      ##                      ##                      ##                      ##                      ##                      ##                      ############  ###########",
"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ",);
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");