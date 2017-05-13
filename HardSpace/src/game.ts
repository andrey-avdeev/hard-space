import { BootState } from './states/boot.js';
import { LevelState } from './states/level.js';
import { MenuState } from './states/menu.js';
import { PreloadState } from './states/preload.js';

export class Game extends Phaser.Game {
	constructor() {
		super(320, 640, Phaser.AUTO);

		this.state.add("Boot", BootState);
		this.state.add("Preload", PreloadState);
		this.state.add("Menu", MenuState);
		this.state.add("Level", LevelState);

		this.state.start("Boot");
	}
}