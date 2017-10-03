function Reels() {
  Reels.parent.constructor.apply(this, arguments);
}

Reels.prototype = {
  constructor: Reels,

  getDefaultMVCClasses: function () {
    return {
      model: ReelsModel,
      view: ReelsView,
      controller: ReelsController
    }
  }
};

Reels = utils.extend(Module, Reels);