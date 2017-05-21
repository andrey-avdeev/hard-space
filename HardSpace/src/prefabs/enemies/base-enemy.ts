import { DamageKind } from "Game";

export abstract class BaseEnemy extends Phaser.Sprite {
	public armor: number;

	constructor(
		game: Phaser.Game,
		key: string,
		x: number,
		y: number,
		vx: number,
		vy: number,
		health: number,
		armor: number
	) {
		super(game, x, y, key);

		this.anchor.setTo(0.5);

		this.health = health
		this.armor = armor;

		this.checkWorldBounds = true;
		this.outOfBoundsKill = true;

		this.body.velocity.x = vx;
		this.body.velocity.y = vy;
	}

	public getArmorDamage(damage: number, type: DamageKind) {
		let realDamage = damage - damage * this.armor / 100;
		super.damage(realDamage);
	}
}