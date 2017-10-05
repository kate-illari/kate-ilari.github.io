function SettingsController(moduleName) {
  SettingsController.parent.constructor.call(this, moduleName);

}

SettingsController.prototype = {
  constructor: SettingsController,

  setupEvents: function () {
    var me = this;

    me.on({
      "view:MusicButtonPressed": me.onMusicButtonPressed,
      "view:InfoButtonPressed": me.onInfoButtonPressed
    })
  },

  onMusicButtonPressed: function () {
    this.fireEvent('settings:MusicPressed');
  },

  onInfoButtonPressed: function () {
    this.fireEvent('settings:InfoPressed');
  }

};


SettingsController = utils.extend(Controller, SettingsController);