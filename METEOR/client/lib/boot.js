Meteor.gameStates = Meteor.gameStates || {};

Meteor.gameStates.boot = {
	create: function() {
		var game = Meteor.game;

		//that scale the game to the windows
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignVertically = true;
		this.windowConstraints = { right: 'layout', bottom: 'layout' };
		game.state.start('load')
	}
}