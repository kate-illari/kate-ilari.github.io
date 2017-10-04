function Dimmer() {
  Dimmer.parent.constructor.apply(this, arguments);
}

Dimmer.prototype = {
  constructor: Dimmer,

  getDefaultMVCClasses: function () {
    return {
      model: Model,
      view: DimmerView,
      controller: DimmerController
    }
  }
};

Dimmer = utils.extend(Module, Dimmer);