function SpinButtonController(moduleName) {
  SpinButtonController.parent.constructor.call(this, moduleName);

}

SpinButtonController.prototype = {
  constructor: SpinButtonController,

  setupEvents: function () {
    var me = this;
    this.on({
      "view:spinbuttonUp": me.onSpinButtonUp,
      "reels:SpinEnded": me.onSpinEnded
    })
  },

  onSpinEnded: function () {
    this.view.enableButton();
  },

  onSpinButtonUp: function () {
    this.fireEvent('SpinButton.buttonPressed');
  }
};


SpinButtonController = utils.extend(Controller, SpinButtonController);