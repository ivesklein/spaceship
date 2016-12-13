Meteor.gameStates = Meteor.gameStates || {};

Meteor.gameStates.spaceship = {
	context: {},
	create: function() {
		var game = Meteor.game;

		//here we create the objetcs for the game

		//the background space
	    this.tilesprite = game.add.tileSprite(0, 0, 1366, 768, 'space');
	    this.tilesprite.smoothed = false;
	    this.tilesprite.scale.set(4);
	    //tilesprite.animations.add('light', [1,2,3,4], 10, true);
	    //this.tilesprite.play('light')

	    //the player
	    this.player = game.add.sprite(64, 64, 'player', 1);
	    this.player.smoothed = false;
	    this.player.scale.set(4);
	    this.shipwave = this.player.animations.add('wave', [1,2,3,4], 10, true);
	    game.physics.enable(this.player, Phaser.Physics.ARCADE);
	    this.waving = false; //flag for animation/sound play and stop

	    //the sounds
	    this.sship = game.add.audio('shipsound');

	    //this.swind = game.add.audio('wind');
	    //this.swind.play('',0,0.5,true)

	    
	    //logs
		this.bmpText = game.add.bitmapText(10, 10, 'dotfont','Drag me around !',40);
		this.bmpText3 = game.add.bitmapText(10, 60, 'dotfont','Drag me around !',40);
		this.bmpText4 = game.add.bitmapText(10, 110, 'dotfont','Drag me around !',40);
		this.bmpText5 = game.add.bitmapText(10, 160, 'dotfont','Drag me around !',40);
		
		//the keyboard controls
	    this.cursors = game.input.keyboard.createCursorKeys();
	    
	    //go fullscreen
	    game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
	    game.input.onDown.add(this.gofull, this);

	},
	gofull: function() {
		var game = Meteor.game;
	    if (game.scale.isFullScreen)
	    {
	        //game.scale.stopFullScreen();
	    }
	    else
	    {
	        game.scale.startFullScreen(false);
	    }

	},
	update: function() {
		var game = Meteor.game;
		var instance = this.context;

		//reset velocity
	    this.player.body.velocity.set(0);

	    //handle keys and set velocities
	    if (this.cursors.left.isDown)
	    {
	        this.tilesprite.tilePosition.x += 4;
	        this.player.body.velocity.x = -100;
	    }
	    else if (this.cursors.right.isDown)
	    {
	        this.tilesprite.tilePosition.x -= 4;
	        this.player.body.velocity.x = 100;
	    }
	    if (this.cursors.up.isDown)
	    {
	        this.tilesprite.tilePosition.y += 4;
	        this.player.body.velocity.y = -100;
	    }
	    else if (this.cursors.down.isDown)
	    {
	        this.tilesprite.tilePosition.y -= 4;
	        this.player.body.velocity.y = 100;
	    }

	    
	    //flag for stop
	    var ismoving = false;

	    //play animation and sounds
	    if (this.cursors.left.isDown)
	    {
	        if(!this.waving){this.waving=true;this.sship.play('',0,1,true);}
	        this.player.play('wave');
	        instance.score.set(instance.score.get()+1)
	        ismoving = true;
	    }
	    else if (this.cursors.right.isDown)
	    {
	        if(!this.waving){this.waving=true;this.sship.play('',0,1,true);}
	        this.player.play('wave');
	        instance.score.set(instance.score.get()+1)
	        ismoving = true;
	    }
	    else if (this.cursors.up.isDown)
	    {
	        if(!this.waving){this.waving=true;this.sship.play('',0,1,true);}
	        this.player.play('wave');
	        instance.score.set(instance.score.get()+1)
	        ismoving = true;
	    }
	    else if (this.cursors.down.isDown)
	    {
	        if(!this.waving){this.waving=true;this.sship.play('',0,1,true);}
	        this.player.play('wave');
	        instance.score.set(instance.score.get()+1)
	        ismoving = true;
	    }

	    //touch handler
	    if (game.input.activePointer.isDown)
	    {
	        if(!this.waving){this.waving=true;this.sship.play('',0,1,true);}
	        this.player.play('wave');
	        instance.score.set(instance.score.get()+1)


	   		var deltaX = +(game.input.activePointer.worldX-(this.player.world.x+16*4))
	    	var deltaY = +(game.input.activePointer.worldY-(this.player.world.y+21*4))


			this.tilesprite.tilePosition.x -= deltaX*0.04;
			this.tilesprite.tilePosition.y -= deltaY*0.04;
			this.player.body.velocity.x = deltaX;
			this.player.body.velocity.y = deltaY;



	        ismoving = true;
	    }
	    
	    //stop animation and sounds
	    if(!ismoving)
	    {
	        if(this.waving){this.waving=false;this.sship.stop();}
	        this.player.animations.stop();
	    }

	    //change framerate
	    //this.player.animations._anims.wave.speed = (Math.abs(this.player.body.velocity.x)+Math.abs(this.player.body.velocity.y))*0.03 ;
	    this.shipwave.speed = (Math.abs(this.player.body.velocity.x)+Math.abs(this.player.body.velocity.y))*0.03 ;


	    //log
		this.bmpText.text = instance.text;
	    this.bmpText3.text = "X ship "+Math.floor(this.player.world.x+16*4);
	    this.bmpText4.text = "Y ship "+Math.floor(this.player.world.y+21*4);
	   	this.bmpText5.text = "Velocity "+Math.floor(Math.abs(this.player.body.velocity.x)+Math.abs(this.player.body.velocity.y))


	}
}