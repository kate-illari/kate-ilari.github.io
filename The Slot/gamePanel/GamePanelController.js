function GamePanelController(moduleName) {
  GamePanelController.parent.constructor.call(this, moduleName);

}

GamePanelController.prototype = {
  constructor: GamePanelController,

  setupEvents: function () {
    var me = this;

    me.on({
      "ServerResponse": me.onServerResponse,
      "reels:SpinStarted": me.onSpinStarted,
      "betlines:initWinPresentationCompleted": me.onInitWinPresentationCompleted,
      "betMultiplier:BetChanged": me.onBetMultiplierChange
    })
  },

  onServerResponse: function (serverResponse) {
    this.model.storeData('win', serverResponse.win.totalWin);
  },

  onSpinStarted: function () {
    this.view.clearWin();
    this.view.decreaseBalance();
  },

  onInitWinPresentationCompleted: function () {
    var me = this,
        win = me.model.readData('win');

    me.view.updateWin(win);
    me.view.increaseBalance(win);
  },

  onBetMultiplierChange: function (multiplier) {
    this.view.updateBet(multiplier);
  }

};


GamePanelController = utils.extend(Controller, GamePanelController);