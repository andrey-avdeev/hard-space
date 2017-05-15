import { BaseAmmo } from './base-ammo.js';

export class Beam extends BaseAmmo {
	constructor(
		game: Phaser.Game,
		x: number,
		y: number,
		key: string,
		vx: number,
		vy: number,
		power: number
	) {
		super(game, x, y, key);

		this.body.velocity.x = vx;
		this.body.velocity.y = vy;
	}
}