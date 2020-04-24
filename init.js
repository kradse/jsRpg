import { sceneController as scene } from "./src/sceneController.js"
import { getKeys } from "./.data/controlScheme.js"
import { onRun } from "./.data/generator.js"
import { interpreter } from "./src/utilities/interpreter.js"

window.screen = document.getElementById('screen')
window.ctx = screen.getContext('2d')
window.tileSize = 64
window.cols = 21
window.rows = 12
screen.width = 1344
screen.height = 768

ctx.imageSmoothingEnabled = false
window.controlSheme = getKeys()

interpreter.loadTiles()

const init = () => {
	scene.changeScene('level')
};init();

//onRun(30,20)
