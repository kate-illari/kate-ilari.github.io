function SettingsView(moduleName) {
  SettingsView.parent.constructor.call(this, moduleName);

}

SettingsView.prototype = {
  constructor: SettingsView,

  init: function () {
    var me = this,
        root = utils.addContainer('settings'),
        musicButton = me.initMusicButton(root, 30, 700, 'music'),
        infoButton = utils.initInfoButton(root, 80, 700, 'info');

    musicButton.buttonUpCallBack = function () {
      me.onMusicButtonUp();
    };

    infoButton.buttonUpCallBack = function () {
      me.onInfoButtonUp();
    };

    me.root = root;
  },

  initMusicButton: function (container, x, y, image) {
    var params = {
          x: x,
          y: y,
          img: image,
          imgDis: image
          },
        button = new Button(params);

    container.addChild(button);
    return button
  },

  onMusicButtonUp: function () {
    this.fireEvent('view:MusicButtonPressed')
  },

  onInfoButtonUp: function () {
    this.fireEvent('view:InfoButtonPressed')
  }

};

SettingsView = utils.extend(View, SettingsView);