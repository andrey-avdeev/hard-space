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
		super(game, "greenLargeEnemyFly", x, y, vx, vy, health, armor, shield);
	}
}