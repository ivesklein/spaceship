menu = {
	context: {},
	create: function() {
		////var game = Game.game;

		//here we create the objetcs for the game
		var fondo = game.add.group()
		var logo = game.add.group()
		var buttons = game.add.group()

		//the background space
	    this.tilesprite = game.add.tileSprite(0, 0, 1366, 768, 'space');
	    this.tilesprite.smoothed = false;
	    this.tilesprite.scale.set(4);
	    fondo.add(this.tilesprite)
	    
	    //the player
	    this.player = game.add.sprite(64, 64, 'player', 1);
	    this.player.smoothed = false;
	    this.player.scale.set(4);
	    this.shipwave = this.player.animations.add('wave', [1,2,3,4], 10, true);
	    this.player.play('wave');
	    logo.add(this.player)

	    //buttons
	    this.play = new Button(buttons, 100, 100, "PLAY", function() {
	    	game.state.start('spaceship')
	    })

	    
	    //logs
		this.bmpText = game.add.bitmapText(10, 10, 'retrofont','Drag me around !',20);
		this.bmpText3 = game.add.bitmapText(10, 40, 'retrofont','Drag me around !',20);
		this.bmpText4 = game.add.bitmapText(10, 70, 'retrofont','Drag me around !',20);
		this.bmpText5 = game.add.bitmapText(10, 100, 'retrofont','Drag me around !',20);
		
		//the keyboard controls
	    this.cursors = game.input.keyboard.createCursorKeys();
	    
	    //go fullscreen
	    game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
	    game.input.onDown.add(this.gofull, this);

	},
	gofull: function() {
		//var game = Game.game;
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

		//this.tilesprite.tilePosition.x -= 4;
	    //log
		//this.bmpText.text = instance.text;
	    //this.bmpText3.text = "X ship "+Math.floor(this.player.world.x+16*4);
	    //this.bmpText4.text = "Y ship "+Math.floor(this.player.world.y+21*4);
	    //this.bmpText.text = this.tilesprite.tilePosition.x
	   	//this.bmpText5.text = "Velocity "+Math.floor(Math.abs(this.player.body.velocity.x)+Math.abs(this.player.body.velocity.y))

	}
}