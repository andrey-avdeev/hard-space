import * as TileMap from "TileMap";
import { EnemyFactory } from "src/utils/enemy-factory.js";
import { EventFactory } from "src/utils/event-factory.js";
import { LevelProvider } from "src/utils/level-provider.js";
import { MessageFactory } from "src/utils/message-factory.js";
import { Player } from "src/prefabs/player.js";

export class LevelState extends Phaser.State {
	private levelId: number;
	private backgroundKey: string;

	private enemyFactory: EnemyFactory;
	private eventFactory: EventFactory;
	private levelProvider: LevelProvider;
	private messageFactory: MessageFactory;

	private player: Player;

	private level: TileMap.ILevel;

	private background: Phaser.TileSprite;

	init(levelId: number) {
		this.levelId = levelId;

		this.enemyFactory = new EnemyFactory(this.game);
		this.eventFactory = new EventFactory(this.game);
		this.levelProvider = new LevelProvider(this.game);
		this.messageFactory = new MessageFactory(this.game);

		this.level = this.levelProvider.level(levelId);

		this.backgroundKey = "background01";//todo extract from level meta
		this.game.physics.startSystem(Phaser.Physics.ARCADE);
	}

	create() {
		this.background = this.game.add.tileSprite(0, 0, this.game.world.width, this.game.world.height, this.backgroundKey);
		this.background.autoScroll(0, 20);
	}

	update() {
		//this.game.physics.arcade.overlap(this.bulletPool, this.player, this.player.damage, null, this);
		//this.game.physics.arcade.overlap(this.player.bullets, this.enemyPool,this.)

		this.player.body.velocity.x = 0;

		if (this.game.input.activePointer.isDown) {

		}

		//while level is end or player was killed
		//get level objects within visible aread of game view
		//order them by y and start processing them
		//foreach enemies use enemyFactory
		//foreach message use messageFactory
		//foreach bonuses or events use eventFactory
	}
}