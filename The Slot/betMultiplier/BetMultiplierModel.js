function BetMultiplierModel(moduleName) {
  BetMultiplierModel.parent.constructor.call(this, moduleName, "model");
}

BetMultiplierModel.prototype = {
  
  constructor: BetMultiplierModel,

  setupData: function () {
    this.storeData('multiplier', config.initialBetMultiplier);
  }

};

BetMultiplierModel = utils.extend(Model, BetMultiplierModel);