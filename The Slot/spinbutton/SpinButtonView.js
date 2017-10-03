function SpinButtonView(moduleName) {
  SpinButtonView.parent.constructor.call(this, moduleName);
}

SpinButtonView.prototype = {
  constructor: SpinButtonView,

  init: function() {
    var me = this,
      root = utils.addContainer('button'),
      button, buttonParams;

    buttonParams = {
        x: config.spinbutton.x,
        y: config.spinbutton.y,
        img: 'button',
        imgDis: 'button-dis'
    };

    button = new Button(buttonParams);
    utils.addToRenderLoop(function(){button.sprite.rotation += 0.009});
    button.buttonUpCallBack = function () {
      me.fireEvent('view:spinbuttonUp');
      me.disableButton();
    };
    root.addChild(button);
    me.button = button;
  },

  disableButton: function () {
    this.button.disable();
  },

  enableButton: function () {
    this.button.enable();
  }
};

SpinButtonView = utils.extend(View, SpinButtonView);