Meteor.gameStates = Meteor.gameStates || {};

Meteor.gameStates.spaceship = {
	context: {},
	create: function() {
		var game = Meteor.game;
	    this.tilesprite = game.add.tileSprite(0, 0, 1366, 768, 'space');
	    this.tilesprite.smoothed = false;
	    this.tilesprite.scale.set(4);
	    //tilesprite.animations.add('light', [1,2,3,4], 10, true);

	    this.player = game.add.sprite(64, 64, 'player', 1);
	    this.player.smoothed = false;
	    this.player.scale.set(4);
	    this.player.animations.add('wave', [1,2,3,4], 10, true);

	    game.physics.enable(this.player, Phaser.Physics.ARCADE);

	    this.sship = game.add.audio('shipsound');
	    //this.swind = game.add.audio('wind');
	    //this.swind.play('',0,0.5,true)
	    //sounds = [ sship, swind]
	    //game.sound.setDecodedCallback(sounds, start, this);
	    this.waving = false;

		this.bmpText = game.add.bitmapText(10, 10, 'dotfont','Drag me around !',40);
		this.bmpText3 = game.add.bitmapText(10, 60, 'dotfont','Drag me around !',40);

		this.bmpText4 = game.add.bitmapText(10, 110, 'dotfont','Drag me around !',40);
		this.bmpText5 = game.add.bitmapText(10, 160, 'dotfont','Drag me around !',40);
		//this.bmpText5 = game.add.bitmapText(10, 170, 'dotfont','Drag me around !',34);
		//this.bmpText6 = game.add.bitmapText(10, 210, 'dotfont','Drag me around !',34);

	    this.cursors = game.input.keyboard.createCursorKeys();
	    game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;

	    //this.pointer = game.input.pointer
		//game.input.onDown.add(this.gofull, this);

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

	    this.player.body.velocity.set(0);


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

	    this.tilesprite.play('light')

	    var ismoving = false;

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
	    
	    if(!ismoving)
	    {
	        if(this.waving){this.waving=false;this.sship.stop();}
	        this.player.animations.stop();
	    }

	    this.bmpText.text = instance.text;
	    
	    this.player.animations._anims.wave.speed = (Math.abs(this.player.body.velocity.x)+Math.abs(this.player.body.velocity.y))*0.03 ;

	    //console.log(game.input.activePointer)

	    this.bmpText3.text = "X ship "+Math.floor(this.player.world.x+16*4);
	    this.bmpText4.text = "Y ship "+Math.floor(this.player.world.y+21*4);
	   	this.bmpText5.text = "Velocity "+Math.floor(Math.abs(this.player.body.velocity.x)+Math.abs(this.player.body.velocity.y))


	}
}