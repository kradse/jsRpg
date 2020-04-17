import { direction as enumDir } from "../utilities/enums.js"
export class entity{
	//name = string
	//sprite = new Image()
	//x = Int
	//y = Int
	constructor(name, sprite, x, y){
		this.name = name
		this.sprite = sprite
		this.x = x * window.tileSize
		this.y = y * window.tileSize
	}
	move(direction){
		switch (direction) {
			case enumDir.West:
				this.x -= window.tileSize
				break;
			case enumDir.North:
				this.y -= window.tileSize
				break;
			case enumDir.East:
				this.x += window.tileSize
				break;
			case enumDir.South:
				this.y += window.tileSize
				break;
		
			default:
				throw('Unaccepted input')
		}
	}
}