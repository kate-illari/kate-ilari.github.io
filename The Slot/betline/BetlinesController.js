function BetlinesController(moduleName) {
  BetlinesController.parent.constructor.call(this, moduleName);

}

BetlinesController.prototype = {
  constructor: BetlinesController,

  setupEvents: function () {
    var me = this;

    me.on({
      "ServerResponse": me.onServerResponse,
      "reels:SpinEnded": me.onAllReelsStopped,
      "view:AnimCompleted": me.onAnimCompleted,
      "reels:SpinStarted": me.onSpinStarted,
      "betMultiplier:BetChanged": me.onBetChanged
    })
  },

  onSpinStarted: function () {
    var me = this;

    me.view.stopAllBetlines();
    me.model.setState('idle');
  },

  onAnimCompleted: function () {
    var me = this;

    if(me.model.isState('initWinPresentation')){
      me.fireEvent('betlines:initWinPresentationCompleted');
      me.view.stopAllBetlines();
      me.model.setState('toggling');
    }
    this.animateNextBetline();
  },

  animateNextBetline: function () {
    var me = this,
      currentBetlineIdx = me.model.readData('betlineAnimating'),
      linesToHighlight = me.model.readData('linesToHighlight'),
      nextBetlineIdx = currentBetlineIdx !== null ?
        (currentBetlineIdx + 1) % linesToHighlight.length :
        0;

    me.view.playBetline(linesToHighlight[nextBetlineIdx].idx);
    me.model.storeData('betlineAnimating', nextBetlineIdx);
    me.fireEvent('betlines:TogglingLine', linesToHighlight[nextBetlineIdx]);
  },

  onServerResponse: function (serverResponse) {
    this.model.processServerResponse(serverResponse);
  },

  onAllReelsStopped: function () {
    var me = this;

    if(me.model.readData('shouldAnimate')){
      me.model.setState('initWinPresentation');
      me.view.animateAllBetlines();
    }
  },

  onBetChanged: function () {
    this.view.stopAllBetlines();
  }

};


BetlinesController = utils.extend(Controller, BetlinesController);