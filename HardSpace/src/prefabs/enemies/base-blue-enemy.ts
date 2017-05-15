import { BaseEnemy } from "./base-enemy.js";
import { DamageKind } from "Game";

export abstract class BaseBlueEnemy extends BaseEnemy {
	constructor(
		game: Phaser.Game,
		x: number,
		y: number,
		key: string,
		health: number,
		armor: number
	) {
		super(game, x, y, key, health, armor);
	}

	public getDamage(damage: number, type: DamageKind) {
		super.getArmorDamage(damage, type);

		this.play('getArmorDamage');
	}
}