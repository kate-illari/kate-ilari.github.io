function BetMultiplier() {
  BetMultiplier.parent.constructor.apply(this, arguments);
}

BetMultiplier.prototype = {
  constructor: BetMultiplier,

  getDefaultMVCClasses: function () {
    return {
      model: BetMultiplierModel,
      view: BetMultiplierView,
      controller: BetMultiplierController
    }
  }
};

BetMultiplier = utils.extend(Module, BetMultiplier);