function LineWinView(moduleName) {
  LineWinView.parent.constructor.call(this, moduleName);

}

LineWinView.prototype = {
  constructor: LineWinView,

  init: function () {
    var me = this,
        root = utils.addContainer('lineWin'),
        // textBg = me.drawTextBg(root),
        text = me.initText(root);

    root.visible = false;
    root.position.x = utils.getReelAreaCenter().x;

    me.root = root;
    me.text = text;
    // me.textBg = textBg;
  },

  initText: function (container) {
    var style = new PIXI.TextStyle({
          fill: ['#ffffff', '#ffff00', '#ffa500', '#d53369'],
          stroke: 'brown',
          strokeThickness: 3,
          fontSize: 38,
          fontWeight: 'bold',
          fontFamily: 'Verdana',
          dropShadow: true,
          dropShadowBlur: 15,
          dropShadowDistance: 0
        }),
        txt;

    txt = new PIXI.Text('', style);
    txt.anchor.set(0.5, 0.5);

    container.addChild(txt);
    return txt;
  },

  drawTextBg: function (container) {
    var txtBg = new PIXI.Graphics(),
      rectWidth = 120,
      rectHeight = 75,
      rectRad = 10;

    txtBg.beginFill(0xffffff, 0.7);
    txtBg.drawRoundedRect( -rectWidth / 2, -rectHeight / 2, rectWidth, rectHeight, rectRad);
    txtBg.endFill();

    container.addChild(txtBg);
    return txtBg;
  },

  showWinPerLine: function (winBetline) {
    var me = this,
        centerSym = config.betlines[winBetline.idx][2],
        y = utils.getSymConfig(2, centerSym).centerY;

    me.text.text = winBetline.win;
    me.root.position.y = y;
    me.root.visible = true;
  },

  hide: function () {
    this.root.visible = false;
  }

};

LineWinView = utils.extend(View, LineWinView);