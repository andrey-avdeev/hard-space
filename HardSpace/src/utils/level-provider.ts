import { ILevel } from "TileMap";

export class LevelProvider {

	constructor(private game: Phaser.Game, private prefix: string = "level") {

	}

	level = (id: number) => {
		let textId = id > 9 ? id : '0' + id;
		let level = JSON.parse(this.game.cache.getText(this.prefix + textId)) as ILevel;

		return level;
	}
}