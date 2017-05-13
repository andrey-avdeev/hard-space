import { INode } from "Tree";

export class AssetsProvider {
	constructor(private game: Phaser.Game) {

	}

	getTree = () => {
		let tree = JSON.parse(this.game.cache.getText("assetsTree")) as INode;

		return tree;
	}
}