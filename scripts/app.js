// var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update });
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });

var tilesprite;
var cursors;

var player;

var sship;
var swind;

function preload() {

    game.load.spritesheet('space', 'sprites/terrain/space.png', 32, 32);
    game.load.spritesheet('player', 'sprites/player/ship.png', 32, 32);

    //game.load.audio('wind', 'audio/wind.mp3');
    //game.load.audio('shipsound', 'audio/ship.mp3');

}

function create() {

    tilesprite = game.add.tileSprite(0, 0, 800, 600, 'space');
    tilesprite.smoothed = false;
    tilesprite.scale.set(4);
    tilesprite.animations.add('light', [1,2,3,4], 10, true);

    player = game.add.sprite(64, 64, 'player', 1);
    player.smoothed = false;
    player.scale.set(4);
    player.animations.add('wave', [1,2,3,4], 10, true);

    game.physics.enable(player, Phaser.Physics.ARCADE);

    //sship = game.add.audio('shipsound');
    //swind = game.add.audio('wind');

    //sounds = [ sship, swind]
    //game.sound.setDecodedCallback(sounds, start, this);
    cursors = game.input.keyboard.createCursorKeys();

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
        
        player.play('wave');
    }
    else if (cursors.right.isDown)
    {
        
        player.play('wave');
    }
    else if (cursors.up.isDown)
    {
        
        player.play('wave');
    }
    else if (cursors.down.isDown)
    {
        
        player.play('wave');
    }
    else
    {
        player.animations.stop();
    }

}