import { getKeys } from "../../.data/controlScheme.js"
import { player } from "../models/player.js"
import { direction } from "./enums.js"
import { main } from "../main.js"
import { camera } from "../models/camera.js"
import { map } from "../models/map.js"
import { interpreter } from "./interpreter.js"

const _activeListeners = []
let p = new player()

export const addEventHandlers = {
	getControls: () => {
		return _activeListeners
	},
	mapControls: () => {
		document.addEventListener('keydown', _setMapControls)
		_activeListeners.push({ key: 'keydown', procedure: _setMapControls})
	}
}

export const removeEventHandlers = () => {
	_activeListeners.forEach(element => {
		console.log('removing: ', element.key)
		document.removeEventListener(element.key, element.procedure)
	})
}

const _setMapControls = async (e) => {
	const keys = getKeys()
	const m = map.getMap()

	p = p.getPlayer()
	const pTile = {
		x: p.x / tileSize,
		y: p.y / tileSize,
	}
	let tile = {}
	switch (e.code) {
		case keys.Escape:
			main.setGameStatus(3)
			break;
		case keys.action:
			// let me = await camera.getCamPos()
			// console.log(me)
			break;

		case keys.cancel:
			//console.log(p.x)
			break;

		case keys.left: case keys.left2:
			tile = interpreter.readTile(m[pTile.y][pTile.x - 1])
			if (tile.traversable){
				camera.move(direction.West)
				p.move(direction.West)
			}
			break;

		case keys.up: case keys.up2:
			tile = interpreter.readTile(m[pTile.y - 1][pTile.x])
			if (tile.traversable) {
				camera.move(direction.North)
				p.move(direction.North)
			}
			break;

		case keys.right: case keys.right2:
			tile = interpreter.readTile(m[pTile.y][pTile.x + 1])
			if (tile.traversable) {
				camera.move(direction.East)
				p.move(direction.East)
			}
			break;

		case keys.down: case keys.down2:
			tile = interpreter.readTile(m[pTile.y + 1][pTile.x])
			if (tile.traversable) {
				camera.move(direction.South)
				p.move(direction.South)
			}
			break;

		default:
			break;
	}
}