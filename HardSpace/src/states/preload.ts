import { AssetsProvider } from "../utils/assets-provider.js";

export class PreloadState extends Phaser.State {
	private progress: Phaser.Text;

	preload() {
		//progress bar logic
		this.progress = this.game.add.text(this.game.world.centerX, this.game.world.centerY - 30, '0%', { fill: 'black' });
		this.progress.anchor.setTo(0.5);
		let progressBar = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'progressBar');
		progressBar.anchor.set(0.5);
		this.game.load.setPreloadSprite(progressBar);
		this.game.load.onFileComplete.add(this.fileComplete, this);

		//levels autoregistration
		let assetsProvider = new AssetsProvider(this.game);
		let tree = assetsProvider.getTree();
		tree.children.forEach((node) => {
			if (node.isFile)
				this.load.text(node.name.split('.').pop(), 'assets/levels/' + node.name);
		});

		//sprites registration
		this.game.load.spritesheet('b01f', 'assets/images/enemies/b01.png', 34, 33);

		//sounds registration
		//this.game.load.audio('t1', 'assets/sounds/t1.mp3');
		//this.game.load.audio('t2', 'assets/sounds/t2.mp3');
		//this.game.load.audio('t3', 'assets/sounds/t3.mp3');
		//this.game.load.audio('t4', 'assets/sounds/t4.mp3');
	}

	fileComplete(progress: number, cacheKey: string, success: boolean, totalLoaded: number, totalFiles: number) {
		this.progress.text = progress + "%";
	}

	create() {
		this.game.state.start("Menu");
	}
}