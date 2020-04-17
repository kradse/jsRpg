import { sceneController as scene } from "./sceneController.js"
import { timer } from "./utilities/timer.js"

// 0 = loading, 1 = running, 2 = paused, 3 = closing game
let _gameStatus = 0

export const main = {
	start: () => {
		main.setGameStatus(0)
		scene.getScene().load()
		.then(() => {
			main.setGameStatus(1)
			main.update()
		})
	},
	update: async () => {
		const lastTic = performance.now()
		timer.accumulatedTime += (lastTic - timer.lastTime) / 1000

		while (timer.accumulatedTime > timer.deltaTime) {
			ctx.clearRect(0, 0, screen.width, screen.height)
			ctx.beginPath()
			await scene.getScene().update()
			ctx.stroke()

			timer.accumulatedTime -= timer.deltaTime
		}

		switch (_gameStatus) {
			case 0:
				return null

			case 1: case 2:
				timer.lastTime = lastTic
				//console.log('running')
				setTimeout(() => {
					return main.update()
				}, 16)
				break;

			case 3:
				console.log('Game Ended with status of: ', _gameStatus)
				return null

			default:
				break;
		}
	},
	getGameStatus: () => {
		return _gameStatus
	},
	setGameStatus: (newStatus) => {
		_gameStatus = newStatus
	}
}