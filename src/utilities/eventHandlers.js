import { getKeys } from "../../.data/controlScheme.js"
import { player } from "../models/player.js"
import { direction } from "./enums.js"
import { main } from "../main.js"

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

const _setMapControls = (e) => {
	const keys = getKeys()
	switch (e.code) {
		case keys.Escape:
			main.setGameStatus(3)
			break;
		case keys.left: case keys.left2:
			p = p.getPlayer()
			p.move(direction.West)
			break;
		case keys.up: case keys.up2:
			p = p.getPlayer()
			p.move(direction.North)
			break;
		case keys.right: case keys.right2:
			p = p.getPlayer()
			p.move(direction.East)
			break;
		case keys.down: case keys.down2:
			p = p.getPlayer()
			p.move(direction.South)
			break;

		default:
			break;
	}
}