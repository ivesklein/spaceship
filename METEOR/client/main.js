Template.game.onRendered(function(){

	var instance = this;
	instance.score = new ReactiveVar(0);

	Meteor.game = new Phaser.Game(1366, 768, Phaser.AUTO, 'phaser-example');
	var game = Meteor.game;

	Meteor.gameStates.spaceship.context = instance

	game.state.add('boot', Meteor.gameStates.boot);
	game.state.add('load', Meteor.gameStates.load);
	game.state.add('spaceship', Meteor.gameStates.spaceship);
	game.state.start('boot');

	instance.autorun(function() {
		instance.text = "score: "+instance.score.get()
	});

})

Template.game.helpers({
	game1: function(){
		return hola
	}

})