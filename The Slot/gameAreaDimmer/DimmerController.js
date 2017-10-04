function DimmerController(moduleName) {
  DimmerController.parent.constructor.call(this, moduleName);

}

DimmerController.prototype = {
  constructor: DimmerController,

  setupEvents: function () {
    var me = this;

    me.on({
      "ServerResponse": me.onServerResponse,
      "reels:SpinEnded": me.onSpinEnded,
      "reels:SpinStarted": me.onSpinStarted,
      "betMultiplier:BetChanged": me.onBetChanged
    })
  },

  onServerResponse: function (response) {
    this.model.storeData('win', response.win.totalWin)
  },

  onSpinEnded: function () {
    var me = this,
        win = me.model.readData('win');

    if(win > 0){
      me.view.startDimmer();
    }
  },

  onBetChanged: function () {
    this.view.hide();
  },

  onSpinStarted: function () {
    this.view.hide();
  }

};


DimmerController = utils.extend(Controller, DimmerController);