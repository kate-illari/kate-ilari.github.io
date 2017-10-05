//[2, 1, 0, 1, 2]
function PaytableBetline(betline, container) {
  PaytableBetline.parent.constructor.apply(this, arguments);

  var symsAmts = config.reels.reduce(function (result, current) {
      return result.concat(current.visibleSyms)
    }, []),
    maxSymCount = Math.max.apply(null, symsAmts),
    i;

  for(i = 0; i < betline.length; i++){
    this.drawColumn(betline[i], symsAmts[i], maxSymCount, i)
  }

  container.addChild(this);
}

PaytableBetline.prototype = {
  constructor: PaytableBetline,

  drawColumn: function (betlineNum, symAmt, maxSymCount, reelIdx) {
    var me = this,
        dimention = 20,
        yOffset = (maxSymCount - symAmt) * dimention / 2,
        i;

    for(i = 0; i < symAmt; i++){
      me.lineStyle(1, 0xffffff, 0.7);
      me.beginFill(i === betlineNum ? 0xd53369 : 0x4B0082, 1);
      me.drawRoundedRect( dimention * reelIdx, dimention * i + yOffset, dimention, dimention, 10);
      me.endFill()
    }
  }

};

PaytableBetline = utils.extend(PIXI.Graphics, PaytableBetline);