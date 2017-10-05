function BetMultiplierController(moduleName) {
  BetMultiplierController.parent.constructor.call(this, moduleName);

}

BetMultiplierController.prototype = {
  constructor: BetMultiplierController,

  setupEvents: function () {
    var me = this;

    me.on({
      "view:betChanged": me.onBetChanged,
      "reels:SpinEnded": me.onSpinEnded,
      "reels:SpinStarted": me.onSpinStarted
    })
  },

  onBetChanged: function (multiplier) {
    this.fireEvent('betMultiplier:BetChanged', multiplier);
  },

  onSpinEnded: function () {
    this.view.enableBetChange();
  },

  onSpinStarted: function () {
    this.view.disableBetChange();
  }

};


BetMultiplierController = utils.extend(Controller, BetMultiplierController);