import { BaseAmmo } from './base-ammo.js';
import { DamageKind } from "Game";

export class Discharge extends BaseAmmo {
	constructor(
		game: Phaser.Game,
		key: string,
		x: number,
		y: number,
		vx: number,
		vy: number,
		power: number
	) {
		super(game, key, x, y, vx, vy, power, DamageKind.Electric);
	}
}