export abstract class BaseGameObject extends Phaser.Sprite {
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
		super(game, x, y, key);

		this.anchor.setTo(0.5);
		this.health = health;

		this.checkWorldBounds = true;
		this.outOfBoundsKill = true;

		this.body.velocity.x = vx;
		this.body.velocity.y = vy;

		this.body.rotation = rotation;
	}
}