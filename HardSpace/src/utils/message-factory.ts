import { IMessage } from "TileMap";

export class MessageFactory {
	constructor(private game: Phaser.Game) {
	}

	show = (message: IMessage) => {
		let text = message.properties.text as string;
		let duration = message.properties.duration as number;
	}
}