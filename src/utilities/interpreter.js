import { loader } from "./loader.js"

let _tiles = {}

export const interpreter = {
	readTile: (tile) => {
		return _tiles.type[tile.type]
	},
	loadTiles: async() => {
		_tiles = await loader.loadJSON('../../.data/tiles.json')
	}
}