﻿export class Boot extends Phaser.State {

	preload() {
		this.load.image('bar', 'assets/images/background.png');
	}

	create() {
		this.game.stage.backgroundColor = '#fff';
		// Disable multitouch
		this.input.maxPointers = 1;

		// Pause if browser tab loses focus
		this.stage.disableVisibilityChange = true;

		if (this.game.device.desktop) {
			// Desktop settings
		} else {
			// Mobile settings
		}

		//this.game.state.start("Preloader");
	}
}