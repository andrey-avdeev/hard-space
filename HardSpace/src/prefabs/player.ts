import { DamageKind } from "Game";

export class Player extends Phaser.Sprite {
	public armor: number;
	public shield: number;

	constructor(
		game: Phaser.Game,
		x: number,
		y: number,
		vx: number,
		vy: number,
		health: number,
		armor: number,
		shield: number
	) {
		super(game, x, y, "p01");

		this.anchor.setTo(0.5);

		this.health = health;
		this.armor = armor;
		this.shield = shield;

		this.checkWorldBounds = true;

		this.body.velocity.x = vx;
		this.body.velocity.y = vy;
	}

	public getArmorDamage(damage: number, type: DamageKind) {
		let realDamage = damage - damage * this.armor / 100;
		super.damage(realDamage);
	}
}