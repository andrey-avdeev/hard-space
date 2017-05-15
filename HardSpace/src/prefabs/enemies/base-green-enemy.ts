import { BaseEnemy } from "./base-enemy.js";
import { DamageKind } from "Game";

export class BaseGreenEnemy extends BaseEnemy {
	public shield: number;

	constructor(
		game: Phaser.Game,
		x: number,
		y: number,
		key: string,
		health: number,
		armor: number,
		shield: number
	) {
		super(game, x, y, key, health, armor);

		this.shield = shield;
	}

	public getDamage(damage: number, type: DamageKind) {
		if (this.shield > 0) {
			this.getShieldDamage(damage, type);

			this.play('getShieldDamage');
		} else {
			super.getArmorDamage(damage, type);

			this.play('getArmorDamage');
		}

		if (this.health <= 0) {
			//todo
		}
	}

	private getShieldDamage(damage: number, type: DamageKind) {
		this.shield -= damage;
	}
}