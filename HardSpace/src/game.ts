import { Boot } from './states/boot.js';

export class Game extends Phaser.Game {
	constructor() {
		super(320, 640, Phaser.AUTO);

		this.state.add("Boot", Boot);
		//this.state.add("Preloader", SpaceShip.Preloader);
		//this.state.add("Home", SpaceShip.Home);
		//this.state.add("Main", SpaceShip.Main);

		this.state.start("Boot");
	}
}