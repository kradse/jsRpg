const shema = {
	up: 'ArrowUp',
	up2: 'KeyW',
	right: 'ArrowRight',
	right2: 'KeyD',
	down: 'ArrowDown',
	down2: 'KeyS',
	left: 'ArrowLeft',
	left2: 'KeyA',
	action: 'KeyX',
	cancel: 'KeyZ',
	Escape: 'Escape'
}

export const getKeys = () => {
	return shema
}
export const updateKey = (keyToUpdate, newValue) => {
	shema[keyToUpdate] = newValue
	controlSheme = getKeys()
}