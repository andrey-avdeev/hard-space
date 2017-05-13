declare module "Tree" {
	export interface INode {
		cwd: string;
		base: string;
		path: string;
		relative: string;
		name: string;
		stat: any;
		_contents: number;
		isFile: boolean;
		children: INode[];
	}
}