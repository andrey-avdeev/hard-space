export class MenuState extends Phaser.State {
	private gameName: Phaser.Text;

	create() {
		this.gameName = this.game.add.text(this.game.world.centerX, this.game.world.top + 30, 'Hard Space', { fill: 'black' });
		this.gameName.anchor.setTo(0.5);
	}
}