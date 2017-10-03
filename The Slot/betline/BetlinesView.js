function BetlinesView(moduleName) {
  BetlinesView.parent.constructor.call(this, moduleName);

}

BetlinesView.prototype = {
  constructor: BetlinesView,

  init: function () {
    var me = this,
      root = utils.addContainer('betlines'),
      betlines = me.createBetLines(root);

    root.visible = false;

    me.root = root;
    me.betlines = betlines;
  },

  createBetLines: function (container) {
    var me = this,
        betlines = [],
        line;

    config.betlines.forEach(function (betline) {
      line = new Betline(betline, container, me.onAnimEnd.bind(me));
      betlines.push(line);
    });

    return betlines;
  },

  onAnimEnd: function () {
    this.root.visible = false;
    this.fireEvent('view:AnimCompleted');
  },

  animateAllBetlines: function () {
    var me = this,
      linesToHighlight = me.model.readData('linesToHighlight');

    linesToHighlight.forEach(function (line) {
      me.playBetline(line.idx);
    });
  },

  stopAllBetlines: function () {
    var me = this;

    me.root.visible = false;
    me.betlines.forEach(function(betline){
      betline.stop();
    })
  },

  playBetline: function (idx) {
    this.root.visible = true;
    this.betlines[idx].play();
  }


};

BetlinesView = utils.extend(View, BetlinesView);