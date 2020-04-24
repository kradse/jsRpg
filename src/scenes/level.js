import { loader } from "../utilities/loader.js"
import { map } from "../models/map.js"
import { addEventHandlers } from "../utilities/eventHandlers.js"
import { player } from "../models/player.js"
import { camera } from "../models/camera.js"
import { interpreter } from "../utilities/interpreter.js"

let _spritesheet = {}
let pRef = player

export const level = {
	load: () => {
		return new Promise(resolve => {
			Promise.all([
				loader.loadJSON('../../.data/test.json'),
				loader.loadImage('../../.data/spritesheet.png')
			]).then(values => {
				map.setMap(values[0].map)
				_spritesheet = values[1]
				addEventHandlers.mapControls()
				camera.setCam(0, 0)
				pRef = new player('placeholder', '', 9, 5)
				//console.log(pRef)
				resolve(values)
			})
		})
	},
	update: async () => {
		await _drawMap()
		await _drawPlayer()
	}
}

const _drawMap = async () => {
	const cam = await camera.getCamPos()
	const lvl = map.getMap()
	for (let y = 0; y < rows; y++) {
		for (let x = 0; x < cols; x++) {
			const tile = interpreter.readTile(lvl[y + cam.y][x + cam.x])
			ctx.drawImage(_spritesheet, tile.x * 16, tile.y * 16, 16, 16, x * tileSize, y * tileSize, tileSize, tileSize)
		}
	}
}

/*const _drawMap = async () => {
	const cam = await camera.getCamPos()
	const lvl = map.getMap()
	for (let y = 0; y < rows; y++) {
		for (let x = 0; x < cols; x++) {
			if (lvl[y+cam.y][x+cam.x] == 0) {
				ctx.fillStyle = "#000";
			}
			if (lvl[y + cam.y][x + cam.x] == 1) {
				ctx.fillStyle = "#0D4D00";
			}
			if (lvl[y + cam.y][x + cam.x] == 2) {
				ctx.fillStyle = "#C2B280";
			}
			ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize)
		}
	}
}*/

const _drawPlayer = async () => {
	const cam = await camera.getCamPos()
	ctx.fillStyle = "#aa0000";
	ctx.fillRect(pRef.x - (cam.x * tileSize), pRef.y - (cam.y * tileSize), tileSize, tileSize)
}