import { entity } from "./entity.js"

const _playerList = []

export class player extends entity{
	getPlayer() {
		return _playerList[0]
	}
	constructor(name, sprite, x, y){
		const e = super(name, sprite, x, y)
		if (name != null) {
			this.name = e.name
			this.sprite = e.sprite
			this.move = e.move
			this.x = e.x
			this.y = e.y

			_playerList.push(this)
		}
	}
}

/*export const player = {
	_name: '',
	_sprite: {},
	constructor: (name, sprite) => {
		const p = new entity(name, sprite)
		player._name = p.name
		player._sprite = p.sprite
		player.move = p.move
	},
	getPlayer: () => {
		return player
	}
}*/

/*export class player{
	constructor(name, sprite){
		const p = new entity(name, sprite)
		this.name = p.name
		this.sprite = p.sprite
		this.move = p.move
	}
	getPlayer() {
		return player
	}
}*/