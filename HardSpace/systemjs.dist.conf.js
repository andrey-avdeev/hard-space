System.config({
	//transpiler: "typescript",
	//typescriptOptions: {
	//	"tsconfig": "src/tsconfig.json"
	//},
	encapsulateGlobal: true,
	paths: {
		//'phaser:': 'node_modules/phaser/build/'
		'phaser:': 'node_modules/phaser/build/custom/'
	},
	map: {
		//"phaser": "phaser:phaser.js",
		"PIXI": "phaser:pixi.js",
		"p2": "phaser:p2.js",
		"phaser": "phaser:phaser-split.js"
	},
	//bundles: {
	//	'hardspace.min.js': ['phaser']
	//}
	//meta: {
	//	//'phaser': {
	//	//	format: 'global'
	//	//	//loader: 'js'
	//	//}
	//	'pixi': {
	//		format: 'global'
	//		//loader: 'js'
	//	}
	//},
	//packages: {
	//	"src": {
	//		"defaultExtension": "js"
	//		//"meta": {
	//		//	"*.js": {
	//		//		//"loader": "js"
	//		//	}
	//		//}
	//	}
	//}
});