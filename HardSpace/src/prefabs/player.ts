import { DamageKind } from "Game";
import { BaseAmmo } from "src/prefabs/ammo/base-ammo.js";
import { BaseGameObject } from './base-game-object.js';

export class Player extends Phaser.Sprite {
	public armor: number;
	public shield: number;

	public currentAmmo: DamageKind;

	public beamPool: Phaser.Group;
	public bulletPool: Phaser.Group;
	public dischargePool: Phaser.Group;
	public plasmaPool: Phaser.Group;

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

		this.currentAmmo = DamageKind.Kinetic;
	}

	public getDamage(ammo: BaseAmmo) {
		this.processDamage(ammo.power, ammo.damageKind);
	}

	private processDamage(damage: number, type: DamageKind) {
		if (this.shield > 0) {
			this.getShieldDamage(damage, type);

			this.play('getShieldDamage');
		} else {
			this.getArmorDamage(damage, type);

			this.play('getArmorDamage');
		}

		if (this.health <= 0) {
			//todo
		}
	}

	private getShieldDamage(damage: number, type: DamageKind) {
		this.shield -= damage;
	}

	private getArmorDamage(damage: number, type: DamageKind) {
		let realDamage = damage - damage * this.armor / 100;
		super.damage(realDamage);
	}

	public shoot() {
		switch (this.currentAmmo) {
			case DamageKind.Kinetic:
				let bullet = this.bulletPool.getFirstExists(false);
				break;
			case DamageKind.Electric:
				let discharge = this.dischargePool.getFirstExists(false);

				break;
			case DamageKind.Laser:
				let beam = this.beamPool.getFirstExists(false);

				break;
			case DamageKind.Plasma:
				let plasma = this.plasmaPool.getFirstExists(false);

				break;
		}
	}
}