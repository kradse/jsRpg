import { sceneController as scene } from "./src/sceneController.js"
import { getKeys } from "./.data/controlScheme.js"

window.screen = document.getElementById('screen')
window.ctx = screen.getContext('2d')
window.tileSize = 64
screen.width = 1344
screen.height = 768
ctx.imageSmoothingEnabled = false
window.controlSheme = getKeys()

const init = () => {
	scene.changeScene('level')
};init();