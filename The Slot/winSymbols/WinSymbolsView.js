function WinSymbolsView(moduleName) {
  WinSymbolsView.parent.constructor.call(this, moduleName);

}

WinSymbolsView.prototype = {
  constructor: WinSymbolsView,

  init: function () {
    var me = this,
      root = utils.addContainer('wimSymbols');

    root.visible = false;
    me.root = root;
  },

  drawSym: function (x, y, img) {
    var me = this,
        sym = new Symbol({
          symIdx: 0,
          img: img,
          container: me.root
        });

    sym.position.x = x;
    sym.position.y = y;
    sym.visible = false;

    me.root.addChild(sym);
    return sym;
  },

  drawAllSyms: function (winBetlines, topSyms) {
    this.root.removeChildren();

      var me = this,
          allDrawnSyms = [];

      topSyms.forEach(function (sym, reelIdx) {
        var reelSymbols = config.reels[reelIdx].reelStrip,
            reelLength = config.reels[reelIdx].visibleSyms,
            drawnSymReel = [],
            drawnSym;

        for(var i = 0; i < reelLength; i++){
          var nextSym = sym + i,
              symIdx = nextSym < reelSymbols.length ?
                nextSym :
                nextSym % reelSymbols.length,
              symPosition = utils.getSymConfig(reelIdx, i);

          drawnSym = me.drawSym(symPosition.left, symPosition.top, reelSymbols[symIdx]);
          drawnSymReel.push(drawnSym);
        }
        allDrawnSyms.push(drawnSymReel);
      });
    this.allDrawnSyms = allDrawnSyms;
  },

  showAllWinSyms: function (result) {
    var me = this,
        winBetlines = result.win.winBetlines;

    this.root.visible = true;

    winBetlines.forEach(function (winBetline) {
      config.betlines[winBetline.lineIdx].forEach(function (symIdx, reelIdx) {
        me.allDrawnSyms[reelIdx][symIdx].visible = true;
      })
    });

  },

  toggleWinBetline: function (togglingLine) {
    var me = this,
        winBetlines = me.model.readData('win').win.winBetlines,
        symsCount;

    me.root.visible = true;

    winBetlines.forEach(function(betline){
      if(betline.lineIdx === togglingLine.idx){
        symsCount = betline.symsCount;
      }
    });

    me.allDrawnSyms.forEach(function (reel) {
      reel.forEach(function (sym) {
        sym.visible = false;
      });
    });

    for(var i = 0; i < symsCount; i++){
      var symIdx = config.betlines[togglingLine.idx][i];

      me.allDrawnSyms[i][symIdx].visible = true;
    }

  },

  hide: function () {
    this.root.visible = false;
  }

};

WinSymbolsView = utils.extend(View, WinSymbolsView);