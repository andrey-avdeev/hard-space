import { BaseEnemy } from "./base-enemy.js";
import { DamageKind } from "Game";

export abstract class BaseBlueEnemy extends BaseEnemy {
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
		super(game, key, x, y, vx, vy, health, armor);
	}

	public getDamage(damage: number, type: DamageKind) {
		super.getArmorDamage(damage, type);

		this.play('getArmorDamage');
	}
}