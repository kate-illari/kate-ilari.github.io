function GamePanelView(moduleName) {
  GamePanelView.parent.constructor.call(this, moduleName);

}

GamePanelView.prototype = {
  constructor: GamePanelView,

  init: function () {
    var root = utils.addContainer('gamePanel');

    root.x = 230;
    this.drawPanelElements(root);
    this.root = root;
  },

  updateBet: function (multiplier) {
    this.betAmt = config.reels.length * multiplier;
    this.bet.text = 'Bet: ' + this.betAmt;
  },

  drawPanelElements: function (container) {
    var me = this,
        y = config.gamePanelPosition.y,
        betX = config.gamePanelPosition.betX,
        balanceX = config.gamePanelPosition.balanceX,
        winX = config.gamePanelPosition.winX,
        betMult = config.initialBetMultiplier;

    me.balanceAmt = config.initialBalance;
    me.betAmt = config.reels.length * betMult;

    me.bet = me.addText(betX, y, 'Bet: ' + me.betAmt);
    me.balance = me.addText(balanceX, y, 'Balance: ' + me.balanceAmt);
    me.win = me.addText(winX, y, 'Win: 0');



    container.addChild(me.bet, me.balance, me.win);
  },

  addText: function (x, y, text) {
    var style = new PIXI.TextStyle({
      fill: '#ffffff',
      fontSize: 15,
      fontFamily: 'Verdana'
    });

    var txt = new PIXI.Text(text, style);
    txt.x = x;
    txt.y = y;

    return txt;
  },

  updateWin: function (winAmt) {
    this.win.text = 'Win: ' + winAmt;
  },

  clearWin: function () {
    this.win.text = 'Win: 0';
  },

  decreaseBalance: function () {
    var me = this;

    me.balanceAmt -= me.betAmt;
    me.balance.text = 'Balance: ' + me.balanceAmt;
  },

  increaseBalance: function (win) {
    var me = this;

    me.balanceAmt += win;
    me.balance.text = 'Balance: ' + me.balanceAmt;
  }


};

GamePanelView = utils.extend(View, GamePanelView);