function ReelsController(moduleName) {
  ReelsController.parent.constructor.call(this, moduleName);

}

ReelsController.prototype = {
  constructor: ReelsController,

  setupEvents: function () {
    var me = this;

    me.on({
      "SpinButton.buttonPressed": me.onSpinButtonUp,
      "ServerResponse": me.onServerResponse,
      "view:allReelsStopped": me.onAllReelsStopped,
      "view:oneReelStopped": me.onOneReelStopped
    })
  },

  onSpinButtonUp: function () {
    this.view.startSpin();
    this.fireEvent("ServerResponseRequested");
    this.fireEvent("reels:SpinStarted");
  },

  onServerResponse: function (serverResponse) {
    var me = this;

    me.model.storeData('stopSymsArr', serverResponse.symsToStopOn);
    setTimeout(me.view.requestFirstReelStop.bind(me.view), 1000)
  },

  onAllReelsStopped: function () {
    this.fireEvent("reels:SpinEnded");
  },

  onOneReelStopped: function () {
    this.fireEvent("reels:ReelStopped");
  }

};


ReelsController = utils.extend(Controller, ReelsController);