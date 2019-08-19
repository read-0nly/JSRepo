class Atom{
	//The base type for any "thing" in the game world
	constructor(x,y,z,dir,tile,collisionLayers){
		this.collisionLayers = new Array();
		this.x = x;
		this.y = y;
		this.z = z;
		this.dir = dir;
		this.tile = tile;	
		if(collisionLayers == null){
			collisionLayers = new Array()
		}
		this.collisionLayers = collisionLayers;
	}
	boundaryAction(BoundX, BoundY){}
	collisionAction(ColX, ColY, ColZ, ColActor){}
}
class Tile extends Atom{
	//The base type for environmental tiles (walls, floors, etc)
	constructor(x,y,z,dir,tile,collisionLayers){
		super(x,y,z,dir,tile,collisionLayers)
		this.collisionLayers.push("Tile")
	}

}
class Item extends Atom{
	//The base type for items (can be picked up and used, moves between inventory and gameworld)
	constructor(x,y,z,dir,tile,collisionLayers,stack){
		super(x,y,z,dir,tile,collisionLayers)
		this.collisionLayers.push("Item")
		this.stack = stack
	}
	fireAction(){}
}
class Actor extends Atom{
	//Base type for an actor (represents an active entity with related properties like health)
	constructor(x,y,z,dir,tile,collisionLayers,health,damageModifier){
		super(x,y,z,dir,tile,collisionLayers)
		this.health = health;
		this.damageModifier = damageModifier;
		this.collisionLayers.push("Actor")
	}
	fireAction(){}
	jumpAction(newZ) {}
	moveAction(moveDir) {}
}
class Player extends Actor{
	//Base type for a player - also binds keyset
	constructor(x,y,z,dir,tile,collisionLayers,health,damageModifier,keys){
		super(x,y,z,dir,tile,collisionLayers,health,damageModifier)
		this.collisionLayers.push("Player")
		this.keys = keys
	}
}

