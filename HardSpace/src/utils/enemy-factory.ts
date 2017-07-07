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

export class EnemyFactory {
	constructor(private game: Phaser.Game) {

	}

	create = (enemy: IGameObject) => {
		switch (enemy.type) {
			case EnemyTypes.Asteroid:
				return this.createAsteroid(enemy);
			case EnemyTypes.Green:
				return this.createGreen(enemy);
			case EnemyTypes.Blue:
				return this.createBlue(enemy);
			case EnemyTypes.Obstacle:
				return this.createObstacle(enemy);
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
}

class EnemyTypes {
	static Asteroid = "asteroid";
	static Green = "green";
	static Blue = "blue";
	static Obstacle = "obstacle";
}