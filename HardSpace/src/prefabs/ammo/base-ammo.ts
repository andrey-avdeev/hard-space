import { DamageKind } from "Game";
import { BaseGameObject } from '../base-game-object.js';

export class BaseAmmo extends BaseGameObject {
	public power: number;
	public damageKind: DamageKind;

	constructor(
		game: Phaser.Game,
		key: string,
		x: number,
		y: number,
		vx: number,
		vy: number,
		power: number,
		damageKind: DamageKind
	) {
		super(game, key, x, y, vx, vy, null, null);

		this.power = power;
		this.damageKind = damageKind;
	}
}