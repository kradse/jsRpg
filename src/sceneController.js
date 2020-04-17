import { level } from "./scenes/level.js"
import { removeEventHandlers } from "./utilities/eventHandlers.js"
import { main } from "./main.js"

const _scenes = {
	level
}
let _activeScene = {}

export const sceneController = {
	getScene: () => {
		return _activeScene
	},
	changeScene: (newScene) => {
		removeEventHandlers()
		_activeScene = _scenes[newScene]
		main.start()
	}
}