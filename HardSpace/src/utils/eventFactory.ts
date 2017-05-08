import { IEvent } from "TileMap";

export class EventFactory {
	constructor(private game: Phaser.Game) {

	}

	raise = (event: IEvent) => {
		let action = event.properties.action as string;
		let delay = event.properties.delay as number;

	}
}