function SpinButton() {
  SpinButton.parent.constructor.apply(this, arguments);
}

SpinButton.prototype = {
  constructor: SpinButton,

  getDefaultMVCClasses: function () {
    return {
      model: Model,
      view: SpinButtonView,
      controller: SpinButtonController
    }
  }
};

SpinButton = utils.extend(Module, SpinButton);