function Betlines() {
  Betlines.parent.constructor.apply(this, arguments);
}

Betlines.prototype = {
  constructor: Betlines,

  getDefaultMVCClasses: function () {
    return {
      model: BetlinesModel,
      view: BetlinesView,
      controller: BetlinesController
    }
  }
};

Betlines = utils.extend(Module, Betlines);