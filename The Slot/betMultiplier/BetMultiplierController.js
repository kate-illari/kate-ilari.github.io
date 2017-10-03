function BetMultiplierController(moduleName) {
  BetMultiplierController.parent.constructor.call(this, moduleName);

}

BetMultiplierController.prototype = {
  constructor: BetMultiplierController,

  setupEvents: function () {
    var me = this;

    me.on({
      "view:betChanged": me.onBetChanged
    })
  },

  onBetChanged: function (multiplier) {
    this.fireEvent('betMultiplier:BetChanged', multiplier);
  }

};


BetMultiplierController = utils.extend(Controller, BetMultiplierController);