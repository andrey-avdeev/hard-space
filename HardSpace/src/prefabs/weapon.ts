import { BaseGameObject } from './base-game-object.js';

export class Weapon extends BaseGameObject {
	constructor(
		game: Phaser.Game,
		key: string,
		x: number,
		y: number,
		vx: number,
		vy: number,
		health: number,
		rotation: number
	) {
		super(game, key, x, y, vx, vy, health, rotation);
	}
}