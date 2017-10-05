function WinSymbolsController(moduleName) {
  WinSymbolsController.parent.constructor.call(this, moduleName);

}

WinSymbolsController.prototype = {
  constructor: WinSymbolsController,

  setupEvents: function () {
    var me = this;

    me.on({
      "ServerResponse": me.onServerResponse,
      "reels:SpinEnded": me.onSpinEnded,
      "reels:SpinStarted": me.onSpinStarted,
      "betMultiplier:BetChanged": me.onBetChanged,
      "betlines:TogglingLine": me.onTogglingLine
    })
  },

  onServerResponse: function (response) {
    var me = this;

    me.model.processServerResponse(response);
    me.view.drawAllSyms(response.win.winBetlines, response.symsToStopOn)
  },

  onSpinEnded: function () {
    var me = this,
        winBetlines = me.model.readData('winBetlines');

    me.view.showAllWinSyms(winBetlines);
  },

  onTogglingLine: function (line) {
    this.view.toggleWinBetline(line);
  },

  onBetChanged: function () {
    this.view.hide();
  },

  onSpinStarted: function () {
    this.view.hide();
  }

};


WinSymbolsController = utils.extend(Controller, WinSymbolsController);