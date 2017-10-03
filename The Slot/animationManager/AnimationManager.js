function AnimationManager() {
  AnimationManager.parent.constructor.apply(this, arguments);
}

AnimationManager.prototype = {
  constructor: AnimationManager,
  getDefaultMVCClasses: function () {
    return {
      model: Model,
      view: AnimationManagerView,
      controller: Controller
    }
  }
};

AnimationManager = utils.extend(Module, AnimationManager);
