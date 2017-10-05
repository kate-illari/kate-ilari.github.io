function Settings() {
  Settings.parent.constructor.apply(this, arguments);
}

Settings.prototype = {
  constructor: Settings,

  getDefaultMVCClasses: function () {
    return {
      model: Model,
      view: SettingsView,
      controller: SettingsController
    }
  }
};

Settings = utils.extend(Module, Settings);