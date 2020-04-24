import { direction as dirNum } from "../utilities/enums.js"
import { map } from "./map.js"

let _x = 0
let _y = 0

export const camera = {
	setCam: async (x, y) => {
		_x = x
		_y = y
	},
	getCamPos: async() => {
		return {x: _x, y: _y}
	},
	move: async(dir) => {
		const m = map.getMap()
		switch (dir) {
			case dirNum.West:
				if (_x > 0) {
					_x--
				}
				break;
			case dirNum.North:
				if (_y > 0) {
					_y--
				}
				break;
			case dirNum.East:
				if (_x + cols < m[0].length) {
					_x++
				}
				break;
			case dirNum.South:
				if (_y + rows < m.length) {
					_y++
				}
				break;
		
			default:
				break;
		}
	}
}
