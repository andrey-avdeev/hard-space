System.config({
	//transpiler: "typescript",
	//typescriptOptions: {
	//	"tsconfig": "src/tsconfig.json"
	//},
	paths: {
		'phaser:*': 'node_modules/phaser/build/*'
	},
	map: {
		"phaser": "phaser:phaser.js"
	},
	//meta: {
	//	'phaser': {
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