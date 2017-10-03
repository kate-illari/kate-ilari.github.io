function LineWinController(moduleName) {
  LineWinController.parent.constructor.call(this, moduleName);

}

LineWinController.prototype = {
  constructor: LineWinController,

  setupEvents: function () {
    var me = this;

    me.on({
      "ServerResponse": me.onServerResponse,
      "betlines:initWinPresentationCompleted": me.onWinPresentationCompleted
    })
  },

  onServerResponse: function (serverResponse) {
    this.model.storeData('win', serverResponse.win.winBetlines);
  },

  onSpinEnded: function () {
    var me = this,
      win = me.model.readData('win');

    if(win > 0){
      me.view.animateWinBanner(win);
    }
  }

};


LineWinController = utils.extend(Controller, LineWinController);