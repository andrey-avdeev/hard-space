import { BaseGreenEnemy } from "./base-green-enemy.js";

export class LargeGreenEnemy extends BaseGreenEnemy {
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
		super(game, "lg01", x, y, vx, vy, health, armor, shield);
	}
}