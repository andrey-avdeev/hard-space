export class BootState extends Phaser.State {

	preload() {
		//preload assets registration
		this.load.image('preloadGrid', 'assets/images/other/preload01.png');
		this.load.image('preloadRed', 'assets/images/other/preload02.png');
		this.load.image('preloadGreen', 'assets/images/other/preload03.png');

		this.load.spritesheet('awaiterBomb', 'assets/images/other/awaiter01.png', 32, 32, 23, 0);

		this.load.text("assetsTree", "assets/tree.json");
	}

	create() {
		this.game.stage.backgroundColor = '#fff';

		// Pause if browser tab loses focus
		this.stage.disableVisibilityChange = true;

		if (this.game.device.desktop) {
			// Desktop settings
		} else {
			// Mobile settings
			this.input.maxPointers = 2;
		}

		this.game.state.start("Preload");
	}
}