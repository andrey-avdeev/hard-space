
export class AssetsProvider {
	constructor(private game: Phaser.Game) {

	}

	loadLevels = () => {
		let levelsMeta = JSON.parse(this.game.cache.getText("tilemap-assets"));
	}

	loadAssets = () => {
		let assetsStructure = JSON.parse(this.game.cache.getText("tree"));
	}
}