import { IMessage } from "TileMap";

export class MessageFactory {
	constructor(private game: Phaser.Game, private messagePool: any) {

	}

	show = (message: IMessage) => {
		let text = message.properties.text as number;
		let duration = message.properties.duration as number;
	}
}