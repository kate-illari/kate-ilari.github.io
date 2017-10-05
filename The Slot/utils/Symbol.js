function Symbol(symParams) {
  Symbol.parent.constructor.apply(this, arguments);

  this.sprite = new PIXI.Sprite(imgConfig.getTextureByName(symParams.img));
  this.sprite.width = symParams.hasOwnProperty('width') ? symParams.width : config.symbol.width;
  this.sprite.height = symParams.hasOwnProperty('height') ? symParams.height : config.symbol.height;
  this.position.y = symParams.hasOwnProperty('y') ? symParams.y : symParams.symIdx * this.sprite.height + (config.symbol.offset * symParams.symIdx);
  this.position.x = symParams.hasOwnProperty('x') ? symParams.x : 0;

  this.addChild(this.sprite);
  symParams.container.addChild(this);
}

Symbol = utils.extend(PIXI.Container, Symbol);




