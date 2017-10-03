function Controller(moduleName) {
    Controller.parent.constructor.call(this, moduleName, "controller");

}

Controller.prototype = {
  constructor: Controller,

  setupEvents: function () {
    // console.warn("default controller at ", moduleName);
  }
};

Controller = utils.extend(Observable, Controller);
