function WinBannerController(moduleName) {
  WinBannerController.parent.constructor.call(this, moduleName);

}

WinBannerController.prototype = {
  constructor: WinBannerController,

  setupEvents: function () {
    var me = this;

    me.on({
      "ServerResponse": me.onServerResponse,
      "reels:SpinEnded": me.onSpinEnded
    })
  },

  onServerResponse: function (serverResponse) {
    this.model.storeData('win', serverResponse.win.totalWin);
  },

  onSpinEnded: function () {
    var me = this,
        win = me.model.readData('win');

    if(win > 0){
      me.view.animateWinBanner(win);
    }
  }

};


WinBannerController = utils.extend(Controller, WinBannerController);