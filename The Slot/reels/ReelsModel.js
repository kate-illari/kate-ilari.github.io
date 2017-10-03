function ReelsModel(moduleName) {
  ReelsModel.parent.constructor.call(this, moduleName, "model");

}

ReelsModel.prototype = {
  constructor: ReelsModel,

  setupData: function () {
    this.storeData('stoppedReelsCounter', 0)
  }

};

ReelsModel = utils.extend(Model, ReelsModel);