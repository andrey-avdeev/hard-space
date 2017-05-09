import { ILevel } from "TileMap";

export class LevelProvider {

	constructor(private game: Phaser.Game, private prefix: string = "level") {

	}

	level = (id: number) => {
		let level = JSON.parse(this.game.cache.getText(this.prefix + id)) as ILevel;

		return level;
	}
}