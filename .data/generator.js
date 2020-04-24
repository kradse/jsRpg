const tiles = ["boulder", "grass", "path", "shallowWater","deepWater"]

export const onRun = async (xLen, yLen) => {
	const map = []
	for (let y = 0; y < yLen; y++) {
		//map.push([])
		const row = []
		for (let x = 0; x < xLen; x++) {
			const tile = {}
			if (y == 0) {
				tile.type = tiles[0]
			}
			else if (y == yLen-1) {
				tile.type = tiles[0]
			}
			else if (x == 0) {
				tile.type = tiles[0]
			}
			else if (x == xLen-1) {
				tile.type = tiles[0]
			}
			else{
				let rng = Math.round(Math.random() * tiles.length)
				if (Number.isInteger(rng) == false){
					rng = 1
				}
				tile.type = tiles[rng]
			}
			tile.events = {}
			row.push(tile)
		}
		map.push(row)
	}
	console.log(JSON.stringify(map))
}
