Button = function(layer,x,y,text,f) {

	this.layer = layer
	var w = 100
	var h = 100
	var bmd2 = Meteor.game.add.bitmapData(w, h);
	bmd2.ctx.beginPath();
	bmd2.ctx.rect(0, 0, w, h);
	bmd2.ctx.fillStyle = '#ff00ff';
	bmd2.ctx.fill();

	this.button = layer.create(x, y, bmd2)
	this.button.anchor.setTo(0.5,0)
	this.button.alpha = 0

	var box =  Meteor.game.add.graphics(x-w/2, y);
	box.beginFill(0xffffff);
	box.drawRoundedRect(0, 0, w, h, 4)
	box.endFill()
	box.alpha = 0.3
	this.layer.add(box)

	this.bmpText = game.add.bitmapText(x, y, 'retrofont','text',20);
	this.bmpText.anchor.setTo(0.5,0)
	this.layer.add(this.bmpText)

	this.button.inputEnabled = true;
	this.button.events.onInputDown.add(f, layer);

}