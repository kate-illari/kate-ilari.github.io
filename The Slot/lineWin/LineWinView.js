function LineWinView(moduleName) {
  LineWinView.parent.constructor.call(this, moduleName);

}

LineWinView.prototype = {
  constructor: LineWinView,

  init: function () {
    var me = this,
        root = utils.addContainer('lineWin'),
        text = me.initText(root);

    root.addChild(text);
    root.visible = false;

    me.root = root;
    me.text = text;
  },

  initText: function () {
    var style = new PIXI.TextStyle({
          fill: ['#ffffff', '#ffff00', '#ffa500', '#d53369'],
          stroke: 'brown',
          strokeThickness: 3,
          fontSize: 40,
          fontWeight: 'bold',
          fontFamily: 'Verdana'
        }),
        txt;

    txt = new PIXI.Text('', style);
    txt.anchor.set(0.5, 0.5);
    txt.position.x = utils.getReelAreaCenter().x;

    return txt;
  },

  showWinPerLine: function (winBetline) {
    var me = this,
        centerSym = config.betlines[winBetline.idx][2],
        y = utils.getSymConfig(2, centerSym).centerY;

    me.root.visible = true;
    me.text.text = winBetline.win;
    me.text.position.y = y;
  },

  hide: function () {
    this.root.visible = false;
  }

};

LineWinView = utils.extend(View, LineWinView);