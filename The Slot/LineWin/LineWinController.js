function LineWinController(moduleName) {
  LineWinController.parent.constructor.call(this, moduleName);

}

LineWinController.prototype = {
  constructor: LineWinController,

  setupEvents: function () {
    var me = this;

    me.on({
      "reels:SpinStarted": me.onSpinStarted,
      "betMultiplier:BetChanged": me.onBetChanged,
      "betlines:TogglingLine": me.onTogglingLine
    })
  },

  onTogglingLine: function (line) {
    this.view.showWinPerLine(line);
  },

  onBetChanged: function () {
    this.view.hide();
  },

  onSpinStarted: function () {
    this.view.hide();
  }

};


LineWinController = utils.extend(Controller, LineWinController);