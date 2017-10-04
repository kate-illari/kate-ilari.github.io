function SymbolsList(idx, container, stopReelCallback) {
  SymbolsList.parent.constructor.apply(this, arguments);

  this.state = 'stopped';
  this.step = 20;
  this.reel = config.reels[idx];
  this.visibleSymsAmt = config.reels[idx].visibleSyms;
  this.visibleArea = (config.symbol.height + config.symbol.offset) * this.visibleSymsAmt;
  this.symsListLength = this.reel.reelStrip.length + this.visibleSymsAmt;
  this.symsHeight = config.symbol.height + config.symbol.offset;
  this.position.y = this.visibleArea - (this.symsListLength * this.symsHeight);
  this.stopReelCallback = stopReelCallback;

  this.symsArr = this.getSymbols(this.reel.reelStrip);
  container.addChild(this);
}

SymbolsList.prototype = {
  constructor: SymbolsList,

  getSymbols: function (syms) {
    var me = this,
      visibleSyms = syms.slice(-this.visibleSymsAmt),
      allSyms = visibleSyms.concat(syms),
      symbolsArr = [];

    allSyms.forEach(function (sym, idx) {
      symbolsArr.push(new Symbol({
        symIdx: idx,
        img: sym,
        container: me
      }));
    });
    return symbolsArr;
  },

  moveSyms: function () {
    this.position.y += this.step;
    if (this.position.y > 0) {
      this.position.y = this.visibleArea - (this.symsListLength * this.symsHeight);
    }
  },

  processStopReel: function (serverIdx) {
    var me = this,
        rawIndex = serverIdx + (me.reel.visibleSyms - 1),

        idx = (rawIndex < me.reel.reelStrip.length ) ?
          rawIndex :
          rawIndex % me.reel.reelStrip.length,

        targetY = (idx === me.reel.reelStrip.length - 1) ?
          0 :
          -me.symsHeight * idx - me.symsHeight;

    //me.position.y = высота символов на экране minus высота всех символов рила

    if( me.position.y < targetY && me.position.y + me.step >= targetY){
      me.position.y += (targetY - me.position.y);
      me.state = 'stopped';
      me.stopReelCallback();
    } else {
      me.moveSyms();
    }
  },

  update: function () {
    var me = this;
    if (me.state === 'spinning'){
      me.moveSyms();
    } else if (me.state === 'stopping'){
      me.processStopReel(me.symToStop);
    }
  }
};

SymbolsList = utils.extend(PIXI.Container, SymbolsList);