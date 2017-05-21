import { AssetsProvider } from "../utils/assets-provider.js";

export class PreloadState extends Phaser.State {
	private progress: Phaser.Text;
	private awaiter: Phaser.Sprite;

	preload() {
		//progress bar logic
		this.progress = this.game.add.text(this.game.world.centerX, this.game.world.centerY - 30, '0%', { fill: 'black' });
		this.progress.anchor.setTo(0.5);

		this.awaiter = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY - 150, 'awaiterBomb')
		this.awaiter.anchor.setTo(0.5);
		this.awaiter.scale.setTo(2);
		this.awaiter.animations.add('fire', [0, 1], 7, true);
		this.awaiter.animations.add('blow', null, 11, false);
		this.awaiter.play('fire');

		let progressBarRed = this.game.add.sprite(this.game.world.centerX - 150, this.game.world.centerY, 'preloadRed');
		let progressBarGreen = this.game.add.sprite(this.game.world.centerX - 150, this.game.world.centerY, 'preloadGreen');
		let progressBarGrid = this.game.add.sprite(this.game.world.centerX - 150, this.game.world.centerY, 'preloadGrid');

		//progressBar.anchor.set(0.5);
		this.game.load.setPreloadSprite(progressBarGreen);
		this.game.load.onFileComplete.add(this.fileComplete, this);

		//levels autoregistration
		let assetsProvider = new AssetsProvider(this.game);
		let tree = assetsProvider.getTree();
		tree.children.forEach((node) => {
			if (node.isFile)
				this.load.text(node.name.split('.').pop(), 'assets/levels/' + node.name);
		});

		//sprites registration
		//ammo
		this.game.load.image("ammoAcid", "assets/images/ammo/acide.png");
		this.game.load.image("ammoBeam", "assets/images/ammo/beam.png");
		this.game.load.image("ammoBlood", "assets/images/ammo/blood.png");
		this.game.load.image("ammoBullet", "assets/images/ammo/bullet.png");
		this.game.load.spritesheet("ammoDischarge", "assets/images/ammo/discharge.png", 31, 11, 4);
		this.game.load.spritesheet("ammoPlasma", "assets/images/ammo/plasma.png", 31, 5, 2);
		this.game.load.spritesheet("ammoRocket", "assets/images/ammo/rocket.png", 22, 61, 1);

		//backgrounds
		this.game.load.image("backgroundBlue", "assets/images/backgrounds/background_blue.png");
		this.game.load.image("backgroundSpace", "assets/images/backgrounds/background_space.png");
		this.game.load.image("backgroundStars", "assets/images/backgrounds/background_stars.png");

		//blue enemies
		this.game.load.spritesheet('blueHugeEnemyFly', 'assets/images/blue/bh01.png', 46, 46, 6);
		this.game.load.spritesheet('blueLargeEnemyFly', 'assets/images/blue/bl01.png', 52, 47, 3);
		this.game.load.spritesheet('blueMediumEnemyFly', 'assets/images/blue/bm01.png', 34, 33, 2);
		this.game.load.image('blueSmallEnemyFly', 'assets/images/blue/bs01.png');

		//bombs
		this.game.load.image("bomb", "assets/images/bombs/bomb01.png");
		this.game.load.image("mine", "assets/images/bombs/bomb02.png");

		//explosions
		this.game.load.spritesheet("explosion01", "assets/images/explosions/explosion01.png", 48, 53, 7);
		this.game.load.spritesheet("explosion02", "assets/images/explosions/explosion02.png", 48, 53, 5);
		this.game.load.spritesheet("explosion03", "assets/images/explosions/explosion03.png", 40, 40, 6);

		//green enemies
		this.game.load.spritesheet('greenHugeEnemyFly', 'assets/images/green/gh01.png', 46, 40, 3);
		this.game.load.spritesheet('greenHugeEnemyArmorDamage', 'assets/images/green/gh02.png', 46, 40, 3);
		this.game.load.spritesheet('greenHugeEnemyFire', 'assets/images/green/gh03.png', 46, 40, 3);
		this.game.load.spritesheet('greenLargeEnemyFly', 'assets/images/green/gl01.png', 50, 35, 1);
		this.game.load.spritesheet('greenMediumEnemyFly', 'assets/images/green/gm01.png', 56, 57, 4);
		this.game.load.spritesheet('greenSmallEnemyFly', 'assets/images/green/gs01.png', 22, 48, 3);
		this.game.load.spritesheet('greenSmallEnemyArmorDamage', 'assets/images/green/gs02.png', 22, 48, 3);

		//obstacles
		this.game.load.image("antenna", "assets/images/obstacles/antenna.png");
		this.game.load.image("asteroidSmall", "assets/images/obstacles/asteroid01.png");
		this.game.load.image("asteroidMedium", "assets/images/obstacles/asteroid02.png");
		this.game.load.image("asteroidLarge", "assets/images/obstacles/asteroid03.png");
		this.game.load.image("asteroidHuge", "assets/images/obstacles/asteroid04.png");

		//other
		this.game.load.spritesheet("awaiterEye", "assets/images/other/awaiter02.png", 32, 32, 20);

		//particles
		this.game.load.image("particleBlue", "assets/images/particles/pt_blue.png");
		this.game.load.image("particleGreen", "assets/images/particles/pt_green.png");
		this.game.load.image("particleRed", "assets/images/particles/pt_red.png");

		//player
		this.game.load.image("playerFly", "assets/images/player/p01.png");

		//powerups
		this.game.load.image("bonusHp", "assets/images/powerups/bonus_hp.png");

		//weapon
		this.game.load.image("bulletGun", "assets/images/weapon/bullet_gun.png");
		this.game.load.image("plasmaGun", "assets/images/weapon/plasma_gun.png");



		//sounds registration
		//this.game.load.audio('t1', 'assets/sounds/t1.mp3');
		//this.game.load.audio('t2', 'assets/sounds/t2.mp3');
		//this.game.load.audio('t3', 'assets/sounds/t3.mp3');
		//this.game.load.audio('t4', 'assets/sounds/t4.mp3');
	}

	fileComplete(progress: number, cacheKey: string, success: boolean, totalLoaded: number, totalFiles: number) {
		this.progress.text = progress + "%";
	}

	create() {
		this.awaiter.animations.stop("fire");
		var blowAnimation = this.awaiter.play('blow', null, null, true);
		blowAnimation.onComplete.add(() => {
			this.game.state.start("Menu");
		});
	}
}