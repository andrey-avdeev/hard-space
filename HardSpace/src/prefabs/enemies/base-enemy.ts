import { DamageKind } from "Game";

export abstract class BaseEnemy extends Phaser.Sprite {
	public health: number;
	public armor: number;

	constructor(
		game: Phaser.Game,
		x: number,
		y: number,
		key: string,
		health: number,
		armor: number
	) {
		super(game, x, y, key);

		this.anchor.setTo(0.5);

		this.health = health
		this.armor = armor;
	}

	public getArmorDamage(damage: number, type: DamageKind) {
		let realDamage = damage - damage * this.armor / 100;
		super.damage(realDamage);
	}
}