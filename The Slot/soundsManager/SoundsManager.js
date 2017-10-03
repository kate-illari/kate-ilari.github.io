function SoundsManager() {
  SoundsManager.parent.constructor.apply(this, arguments);
}

SoundsManager.prototype = {
  constructor: SoundsManager,
  getDefaultMVCClasses: function () {
    return {
      model: Model,
      view: SoundsManagerView,
      controller: SoundsManagerController
    }
  }
};

SoundsManager = utils.extend(Module, SoundsManager);