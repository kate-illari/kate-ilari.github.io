function DimmerView(moduleName) {
  DimmerView.parent.constructor.call(this, moduleName);

}

DimmerView.prototype = {
  constructor: DimmerView,

  init: function () {
    var me = this,
        root = utils.addContainer('dimmer'),
        bg = me.initBg(root);

    root.visible = false;

    me.root = root;
    me.bg = bg;
  },

  initBg: function (container) {
    var bg = new PIXI.Graphics(),
        rectWidth = config.resolution.width,
        rectHeight = config.resolution.height;

    bg.beginFill(0x000000, 0.6);
    bg.drawRect( 0, 0, rectWidth, rectHeight);
    bg.endFill();

    container.addChild(bg);
    return bg;
  },

  startDimmer: function () {
    this.root.visible = true;
  },

  hide: function () {
    this.root.visible = false;
  }

};

DimmerView = utils.extend(View, DimmerView);