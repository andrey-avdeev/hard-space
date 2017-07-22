import { IGameObject } from "TileMap";

import { Asteroid } from "src/prefabs/other/asteroid.js";

import { SmallGreenEnemy } from "src/prefabs/enemies/small-green-enemy.js";
import { MediumGreenEnemy } from "src/prefabs/enemies/medium-green-enemy.js";
import { LargeGreenEnemy } from "src/prefabs/enemies/large-green-enemy.js";
import { HugeGreenEnemy } from "src/prefabs/enemies/huge-green-enemy.js";

import { SmallBlueEnemy } from "src/prefabs/enemies/small-blue-enemy.js";
import { MediumBlueEnemy } from "src/prefabs/enemies/medium-blue-enemy.js";
import { LargeBlueEnemy } from "src/prefabs/enemies/large-blue-enemy.js";
import { HugeBlueEnemy } from "src/prefabs/enemies/huge-blue-enemy.js";

export class GameObjectFactory {
	constructor(private game: Phaser.Game) {

	}

	create = (gameObject: IGameObject) => {
		switch (gameObject.type) {
			case EnemyTypes.Asteroid:
				return this.createAsteroid(gameObject);
			case EnemyTypes.Green:
				return this.createGreen(gameObject);
			case EnemyTypes.Blue:
				return this.createBlue(gameObject);
			case EnemyTypes.Obstacle:
				return this.createObstacle(gameObject);
			case EnemyTypes.Bomb:
				return this.createBomb(gameObject);
			case EnemyTypes.Mine:
				return this.createMine(gameObject);
			case EnemyTypes.Player:
				return this.createPlayer(gameObject);
			case EnemyTypes.Powerup:
				return this.createPowerup(gameObject);
			case EnemyTypes.Weapon:
				return this.createWeapon(gameObject);
			case EnemyTypes.Ammo:
				return this.createAmmo(gameObject);
			default:
				throw new Error("Not implemented.");
		}
	}

	private createAsteroid = (enemy: IGameObject) => {
		return new Asteroid(this.game, enemy.name, enemy.x, enemy.y, enemy.properties.vx, enemy.properties.vy, enemy.properties.hp, enemy.rotation);
	}

	private createGreen = (enemy: IGameObject) => {
		throw new Error("Not implemented.");
	}

	private createBlue = (enemy: IGameObject) => {
		throw new Error("Not implemented.");
	}

	private createObstacle = (enemy: IGameObject) => {
		throw new Error("Not implemented.");
	}

	private createBomb = (enemy: IGameObject) => {
		throw new Error("Not implemented.");
	}

	private createMine = (enemy: IGameObject) => {
		throw new Error("Not implemented.");
	}

	private createPlayer = (enemy: IGameObject) => {
		throw new Error("Not implemented.");
	}

	private createPowerup = (enemy: IGameObject) => {
		throw new Error("Not implemented.");
	}

	private createWeapon = (enemy: IGameObject) => {
		throw new Error("Not implemented.");
	}

	private createAmmo = (enemy: IGameObject) => {
		throw new Error("Not implemented.");
	}
}

class EnemyTypes {
	static Asteroid = "asteroid";
	static Green = "green";
	static Blue = "blue";
	static Obstacle = "obstacle";
	static Bomb = "bomb";
	static Mine = "mine";
	static Player = "player";
	static Powerup = "powerup";
	static Weapon = "weapon";
	static Ammo = "ammo";
}