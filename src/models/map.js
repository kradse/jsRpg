let _map = {}

export const map = {
	getMap: () => {
		return _map
	},
	setMap: (newMap) => {
		_map = newMap
	},
	getTile: (row, col) => {
		return _map[row][col]
	},
	getMapSize: () => {
		return { w: _map.length, h: _map[0].length }
	}
}