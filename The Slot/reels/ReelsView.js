function ReelsView(moduleName) {
  ReelsView.parent.constructor.call(this, moduleName);

}

ReelsView.prototype = {
  constructor: ReelsView,

  init: function () {
    var me = this,
      root = utils.addContainer('reels'),
      reelsContainer = new PIXI.Container(),
      reels = [];

    root.addChild(reelsContainer);
    reelsContainer.position.set(config.reelsContainerPosition.x, config.reelsContainerPosition.y);

    config.reels.forEach(function (reel, idx) {
      var newReel = new Reel(idx, reelsContainer, me.stopReelCallback.bind(me));

      reels.push(newReel);
    });

    me.reelsContainer = reelsContainer;
    me.reels = reels;
  },

  startSpin: function () {
    this.reels.forEach(function (reel) {
      reel.startSpin();
    })
  },

  requestFirstReelStop: function () {
    var me = this,
      stopSymsArr = me.model.readData('stopSymsArr');

    me.reels[0].processStopReel(stopSymsArr[0]);
    me.model.storeData('stoppedReelsCounter', 1);
  },

  stopReelCallback: function () {
    var me = this,
      stoppedReelsNum = me.model.readData('stoppedReelsCounter'),
      stopSymsArr = me.model.readData('stopSymsArr');

    if (stoppedReelsNum < me.reels.length) {
      me.fireEvent('view:oneReelStopped');
      me.reels[stoppedReelsNum].processStopReel(stopSymsArr[stoppedReelsNum]);
      me.model.storeData('stoppedReelsCounter', ++stoppedReelsNum);
    } else {
      me.fireEvent('view:oneReelStopped');
      me.fireEvent('view:allReelsStopped');
      me.model.storeData('stoppedReelsCounter', 0)
    }
  }


};

ReelsView = utils.extend(View, ReelsView);