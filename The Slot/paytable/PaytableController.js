function PaytableController(moduleName) {
  PaytableController.parent.constructor.call(this, moduleName);

}

PaytableController.prototype = {
  constructor: PaytableController,

  setupEvents: function () {
    var me = this;

    me.on({
      "settings:InfoPressed": me.onSettingsInfoPressed,
      "view:InfoButtonUp": me.onPaytableInfoButtonUp
    })
  },

  onSettingsInfoPressed: function () {
    this.view.show()
  },

  onPaytableInfoButtonUp: function () {
    this.view.hide()
  }

};


PaytableController = utils.extend(Controller, PaytableController);