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
      "reels:ReelStopped": me.onReelStopped
    })
  },

  onSpinStarted: function () {
    var spinStartSound = new Audio('audio/StartSpin.mp3');

    spinStartSound.play();
  },

  onBetMultiplierChange: function () {
    var betChangeSound = new Audio('audio/pop.mp3');

    betChangeSound.play();
  },

  onReelStopped: function () {
    var reelStopSound = new Audio('audio/reelStop.mp3');

    reelStopSound.play();
  }

};


SoundsManagerController = utils.extend(Controller, SoundsManagerController);