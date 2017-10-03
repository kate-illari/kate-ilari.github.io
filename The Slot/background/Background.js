function Background() {
  Background.parent.constructor.apply(this, arguments);
}

Background.prototype = {
  constructor: Background,
  getDefaultMVCClasses: function () {
    return {
      model: Model,
      view: BackgroundView,
      controller: Controller
    }
  }
};

Background = utils.extend(Module, Background);