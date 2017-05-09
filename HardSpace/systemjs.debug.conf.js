System.config({
	defaultJsExtensions: false,
	transpiler: "typescript",
	typescriptOptions: {
		"tsconfig": "src/tsconfig.json"
	},
	paths: {
		'phaser:': 'node_modules/phaser/build/'
	},
	map: {
		"phaser": "phaser:phaser.js",
		//"pixi": "phaser:pixi.js",
		//"p2": "phaser:p2.js"
	},
	//meta: {
	//	'phaser': {
	//		//format: 'global'
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