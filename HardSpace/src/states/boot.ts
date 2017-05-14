export class BootState extends Phaser.State {

	preload() {
		//preload assets registration
		this.load.image('progressBar', 'assets/images/progress-bar.png');

		this.load.image('background', 'assets/images/background.png');
		this.load.text("assetsTree", "assets/tree.json");

		//todo
	}

	create() {
		this.game.stage.backgroundColor = '#fff';
		// Disable multitouch
		this.input.maxPointers = 2;

		// Pause if browser tab loses focus
		this.stage.disableVisibilityChange = true;

		if (this.game.device.desktop) {
			// Desktop settings
		} else {
			// Mobile settings
		}

		this.game.state.start("Preload");
	}
}