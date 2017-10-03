function ServerController(moduleName) {
  ServerController.parent.constructor.call(this, moduleName);

}

ServerController.prototype = {
  constructor: ServerController,

  setupEvents: function () {
    var me = this;
    this.on({
      "ServerResponseRequested": me.onServerResponseRequested,
      "betMultiplier:BetChanged": me.onBetMultiplierChange

    })
  },

  onServerResponseRequested: function () {
    var result = this.model.calculateResult();

    this.fireEvent('ServerResponse', result);
    console.log('ServerResponse: ',result);
  },

  onBetMultiplierChange: function (multiplier) {
    this.model.updateBet(multiplier);
  }

};


ServerController = utils.extend(Controller, ServerController);