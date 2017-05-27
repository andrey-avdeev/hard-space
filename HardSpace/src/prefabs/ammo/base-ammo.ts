import { DamageKind } from "Game";

export class BaseAmmo extends Phaser.Sprite {
	public power: number;
	public damageKind: DamageKind;

	constructor(
		game: Phaser.Game,
		key: string,
		x: number,
		y: number,
		vx: number,
		vy: number,
		power: number
	) {
		super(game, x, y, key);

		this.anchor.setTo(0.5);
		this.checkWorldBounds = true;
		this.outOfBoundsKill = true;

		this.body.velocity.x = vx;
		this.body.velocity.y = vy;
	}

	public refresh() {

	}
}