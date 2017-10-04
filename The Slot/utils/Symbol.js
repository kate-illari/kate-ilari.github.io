function Symbol(symParams) {
  Symbol.parent.constructor.apply(this, arguments);

  this.position.y = symParams.symIdx * config.symbol.height + (config.symbol.offset * symParams.symIdx);
  this.sprite = new PIXI.Sprite(imgConfig.getTextureByName(symParams.img));
  this.sprite.width = config.symbol.width;
  this.sprite.height = config.symbol.height;

  this.addChild(this.sprite);
  symParams.container.addChild(this);
}

Symbol = utils.extend(PIXI.Container, Symbol);




