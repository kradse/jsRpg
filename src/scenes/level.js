import { loader } from "../utilities/loader.js"
import { map } from "../models/map.js"
import { addEventHandlers } from "../utilities/eventHandlers.js"
import { player } from "../models/player.js"

let _spriteSheet = {}
let pRef = player

export const level = {
	load: () => {
		return new Promise(resolve => {
			Promise.all([
				loader.loadJSON('../../.data/starter.json')
			]).then(values => {
				map.setMap(values[0].map)
				addEventHandlers.mapControls()
				pRef = new player('placeholder', '', 6, 5)
				//console.log(pRef)
				resolve(values)
			})
		})
	},
	update: async () => {
		_drawMap()
		_drawPlayer()
	}
}

const _drawMap = async() => {
	const lvl = map.getMap();
	for (let y = 0; y < lvl.length; y++) {
		for (let x = 0; x < lvl[y].length; x++) {
			if (lvl[y][x] == 0) {
				ctx.fillStyle = "#000";
			}
			if (lvl[y][x] == 1) {
				ctx.fillStyle = "#0D4D00";
			}
			if (lvl[y][x] == 2) {
				ctx.fillStyle = "#C2B280";
			}
			ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize)
		}
	}
}

const _drawPlayer = async () => {
	ctx.fillStyle = "#aa0000";
	ctx.fillRect(pRef.x, pRef.y, tileSize, tileSize)
}