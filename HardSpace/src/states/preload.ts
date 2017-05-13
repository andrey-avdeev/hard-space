import { AssetsProvider } from "src/utils/assetsProvider.js";

export class PreloadState extends Phaser.State {
	preload() {
		//levels autoregistration
		this.load.text("assetsTree", "assets/tree.json");
		let assetsProvider = new AssetsProvider(this.game);
		let tree = assetsProvider.getTree();
		tree.children.forEach((node) => {
			if (node.isFile)
				this.load.text(node.name.split('.').pop(), 'assets/levels/' + node.name);
		});

		//sprites registration
		//todo
	}

	create() {
		this.game.state.start("Menu");
	}
}