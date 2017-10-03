function BackgroundView(moduleName) {
  BackgroundView.parent.constructor.call(this, moduleName);
}

BackgroundView.prototype = {
  constructor: BackgroundView,

  init: function() {
    var me = this,
        root = utils.addContainer('background'),
        bg = new PIXI.Sprite(imgConfig.getTextureByName("background"));

    // var symbol = new Symbol({
    //   symIdx: 1,
    //   symHeight: 100,
    //   img: 'button',
    //   container: root
    // })

    bg.width = config.resolution.width;
    bg.height = config.resolution.height;

    root.addChild(bg);
    me.root = root;
    // me.symbol = symbol;
  }
};

BackgroundView = utils.extend(View, BackgroundView);