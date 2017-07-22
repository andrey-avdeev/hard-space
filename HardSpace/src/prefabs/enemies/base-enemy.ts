import { DamageKind } from "Game";
import { BaseGameObject } from '../base-game-object.js';

export abstract class BaseEnemy extends BaseGameObject {
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
		super(game, key, x, y, vx, vy, health, null);

		this.armor = armor;

		this.animations.add('fly');
		this.animations.play('fly', 20, true);
	}

	public getArmorDamage(damage: number, type: DamageKind) {
		let realDamage = damage - damage * this.armor / 100;

		super.damage(realDamage);

		let shouldBeKilled = this.health <= 0;

		let damageAnimation = this.animations.getAnimation('getArmorDamage');
		if (damageAnimation) {
			damageAnimation.play(20, false);
			damageAnimation.onComplete.add(() => this.animations.play('fly', 20, true), this);
		}

		if (shouldBeKilled) {
			this.kill();
		};
	}
}
