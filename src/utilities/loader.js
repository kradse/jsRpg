export const loader = {
	loadImage: (url) => {
		return new Promise(resolve => {
			const image = new Image()
			image.addEventListener('load', () => {
				resolve(image)
			})
			image.src = url
		})
	},
	loadJSON: (url) => {
		return fetch(url)
			.then(r => r.json())
			.catch(e => {
				return console.error(e)
			}
		)
	}
}