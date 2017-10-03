function SoundsManagerController(moduleName) {
  SoundsManagerController.parent.constructor.call(this, moduleName);

}


SoundsManagerController.prototype = {
  constructor: SoundsManagerController,

  setupEvents: function () {
    var me = this;

    me.on({
      "reels:SpinStarted": me.onSpinStarted,
      "betMultiplier:BetChanged": me.onBetMultiplierChange,
      "reels:ReelStopped": me.onReelStopped,
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

    if(win > 100){
      me.view.playBigWinSound();
    } else if(win > 100){
      me.view.playWinSound();
    }
  },

  onSpinStarted: function () {
    this.view.playSpinStartSound()
  },

  onBetMultiplierChange: function () {
    this.view.playBetChangeSound()
  },

  onReelStopped: function () {
    this.view.playReelStopSound()
  }

};


SoundsManagerController = utils.extend(Controller, SoundsManagerController);