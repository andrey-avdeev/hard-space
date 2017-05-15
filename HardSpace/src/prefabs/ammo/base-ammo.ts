import { DamageKind } from "Game";

export class BaseAmmo extends Phaser.Sprite {
	constructor(
		game: Phaser.Game,
		x: number,
		y: number,
		key: string
	) {
		super(game, x, y, key);

		this.anchor.setTo(0.5);
		this.checkWorldBounds = true;
		this.outOfBoundsKill = true;
	}
}