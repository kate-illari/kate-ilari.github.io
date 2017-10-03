function View(moduleName) {
  View.parent.constructor.call(this, moduleName, "view");
}

View.prototype = {
  constructor: View,

  init: function () {
    // console.log("default view init at ", moduleName);
  }
};


View = utils.extend(Observable, View);

