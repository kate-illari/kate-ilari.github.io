function SoundsManagerView(moduleName) {
  SoundsManagerView.parent.constructor.call(this, moduleName);

}

SoundsManagerView.prototype = {
  constructor: SoundsManagerView,

  init: function () {

  }
  
};

SoundsManagerView = utils.extend(View, SoundsManagerView);