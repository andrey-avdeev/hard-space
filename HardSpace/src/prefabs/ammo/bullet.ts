import { BaseAmmo } from './base-ammo.js';

export class Bullet extends BaseAmmo {
	constructor(
		game: Phaser.Game,
		key: string,
		x: number,
		y: number,
		vx: number,
		vy: number,
		power: number
	) {
		super(game, key, x, y, vx, vy, power);
	}
}