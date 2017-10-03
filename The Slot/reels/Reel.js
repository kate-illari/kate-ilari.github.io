function Reel(idx, container, stopReelCallback) {
  Reel.parent.constructor.apply(this, arguments);
  this.symbolsList = new SymbolsList(idx, this, stopReelCallback);
  this.position.x = (idx * config.symbol.width) + (idx * config.symbol.offset);
  this.position.y = config.reels[idx].verticalOffset;
  this.width = config.symbol.width + config.symbol.offset;
  this.visibleSymsArea = (config.symbol.height + config.symbol.offset) * config.reels[idx].visibleSyms;
  this.mask = this.addMask(this.width, this.visibleSymsArea);

  utils.addToRenderLoop(this.update.bind(this));

  container.addChild(this);
}

Reel.prototype = {
  constructor: Reel,

  addMask: function (width, height) {
    var graphics = new PIXI.Graphics();

    graphics.beginFill(0xFF700B, 1);
    graphics.drawRect(0, 0, width, height);
    graphics.endFill();

    this.addChild(graphics);
    return graphics;
  },

  update: function () {
    this.symbolsList.update();
  },

  startSpin: function () {
    this.symbolsList.state = 'spinning';
  },

  processStopReel: function (symToStop) {
    var me = this;

    setTimeout(function(){
      me.symbolsList.state = 'stopping';
      me.symbolsList.symToStop = symToStop;
    }, 100);
  }
};


Reel = utils.extend(PIXI.Container, Reel);