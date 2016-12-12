//import { Template } from 'meteor/templating';
//import { ReactiveVar } from 'meteor/reactive-var';

//import './main.html';
//Meteor.phaser = Npm.require('phaser');

Template.game.onRendered(function(){

	var instance = this;
	instance.score = new ReactiveVar(0);
		// var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update });
	Meteor.game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });

	var tilesprite;
	var cursors;

	var player;

	var sship;
	var swind;
	var waving = false;
	var bmpText;
	instance.text = "hola"

	function preload() {

	    Meteor.game.load.spritesheet('space', 'assets/sprites/terrain/space.png', 32, 32);
	    Meteor.game.load.spritesheet('player', 'assets/sprites/player/ship.png', 32, 32);

	    Meteor.game.load.audio('wind', ['assets/audio/wind.wav', 'assets/audio/wind.mp3', 'assets/audio/wind.ogg']);
	    Meteor.game.load.audio('shipsound', ['assets/audio/ship.wav', 'assets/audio/ship.ogg']);

	    Meteor.game.load.bitmapFont('dotfont', 'assets/fonts/font.png', 'assets/fonts/font.fnt');

	}

	function create() {

	    tilesprite = Meteor.game.add.tileSprite(0, 0, 800, 600, 'space');
	    tilesprite.smoothed = false;
	    tilesprite.scale.set(4);
	    //tilesprite.animations.add('light', [1,2,3,4], 10, true);

	    player = Meteor.game.add.sprite(64, 64, 'player', 1);
	    player.smoothed = false;
	    player.scale.set(4);
	    player.animations.add('wave', [1,2,3,4], 10, true);

	    Meteor.game.physics.enable(player, Phaser.Physics.ARCADE);

	    sship = Meteor.game.add.audio('shipsound');
	    swind = Meteor.game.add.audio('wind');
	    swind.play('',0,0.5,true)
	    //sounds = [ sship, swind]
	    //Meteor.game.sound.setDecodedCallback(sounds, start, this);

		bmpText = Meteor.game.add.bitmapText(10, 10, 'dotfont','Drag me around !',34);

	    cursors = Meteor.game.input.keyboard.createCursorKeys();

	}

	function start() {
	    
	    sounds.shift();

	    bass.loopFull(0.6);
	}

	function update() {

	    player.body.velocity.set(0);

	    if (cursors.left.isDown)
	    {
	        tilesprite.tilePosition.x += 4;
	        player.body.velocity.x = -100;
	    }
	    else if (cursors.right.isDown)
	    {
	        tilesprite.tilePosition.x -= 4;
	        player.body.velocity.x = 100;
	    }

	    if (cursors.up.isDown)
	    {
	        tilesprite.tilePosition.y += 4;
	        player.body.velocity.y = -100;
	    }
	    else if (cursors.down.isDown)
	    {
	        tilesprite.tilePosition.y -= 4;
	        player.body.velocity.y = 100;
	    }

	    tilesprite.play('light')

	    if (cursors.left.isDown)
	    {
	        if(!waving){waving=true;sship.play('',0,1,true);}
	        player.play('wave');
	        instance.score.set(instance.score.get()+1)
	    }
	    else if (cursors.right.isDown)
	    {
	        if(!waving){waving=true;sship.play('',0,1,true);}
	        player.play('wave');
	        instance.score.set(instance.score.get()+1)
	    }
	    else if (cursors.up.isDown)
	    {
	        if(!waving){waving=true;sship.play('',0,1,true);}
	        player.play('wave');
	        instance.score.set(instance.score.get()+1)
	    }
	    else if (cursors.down.isDown)
	    {
	        if(!waving){waving=true;sship.play('',0,1,true);}
	        player.play('wave');
	        instance.score.set(instance.score.get()+1)
	    }
	    else
	    {
	        if(waving){waving=false;sship.stop();}
	        player.animations.stop();
	    }

	    bmpText.text = instance.text;

	}


	instance.autorun(function() {
		instance.text = "score: "+instance.score.get()
	});


})

Template.game.helpers({
	game1: function(){
		return hola
	}
// game is a global var from /client/games/examplePhaserGame.js

})