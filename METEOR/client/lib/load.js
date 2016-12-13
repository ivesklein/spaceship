Meteor.gameStates = Meteor.gameStates || {};

Meteor.gameStates.load = {
	preload: function() {
		var game = Meteor.game;

		game.add.text(80,150, 'loading...', {font:'30px Courier', fill:'#ffffff'});

		game.load.spritesheet('space', 'assets/sprites/terrain/space.png', 32, 32);
		game.load.spritesheet('player', 'assets/sprites/player/ship.png', 32, 32);

		//game.load.audio('wind', ['assets/audio/wind.wav', 'assets/audio/wind.mp3', 'assets/audio/wind.ogg']);
		game.load.audio('shipsound', ['assets/audio/ship.wav', 'assets/audio/ship.ogg']);

		game.load.bitmapFont('dotfont', 'assets/fonts/font.png', 'assets/fonts/font.fnt');

	},
	create: function() {
		var game = Meteor.game;
		game.state.start('spaceship')
	}
}