declare module 'Tilemap' {
	export interface ILevel {
		width: number;
		height: number;

		tilewidth: number;
		tileheight: number;

		orientation: string;
		renderorder: string;

		nextobjectid: number;
		version: number;

		layers: ILayer[];
		tilesets: ITileSet[];
	}

	export interface ILayer {
		x: number;
		y: number;
		width: number;
		height: number;

		visible: boolean;
		type: string;
		opacity: number;
		name: string;
	}

	export interface ITileLayer extends ILayer {
		data: number[];
	}

	export interface IObjectLayer extends ILayer {
		draworder: string;
		objects: IGameObject[];
	}

	export interface IGameObject {
		gid: number;
		id: number;

		x: number;
		y: number;

		width: number;
		height: number;

		rotation: number;

		visible: boolean;
		type: string;
		name: string;

		properties: any;
		propertytypes: any;
	}

	export interface IPlayer extends IGameObject {

	}

	export interface IAsteroid extends IGameObject {

	}

	export interface IMessage extends IGameObject {

	}

	export interface IEvent extends IGameObject {

	}

	export interface ITileSet {
		firstgid: number,

		imagewidth: number,
		imageheight: number,
		image: string,

		tilecount: number,
		tilewidth: number,
		tileheight: number,

		name: string,

		columns: number,

		margin: number,
		spacing: number,
	}
}