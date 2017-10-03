function BetlinesModel(moduleName) {
  BetlinesModel.parent.constructor.call(this, moduleName, "model");

}

BetlinesModel.prototype = {
  constructor: BetlinesModel,

  setupData: function () {
    this.setState('idle');
  },

  processServerResponse: function (response) {
    var me = this,
      linesToHighlight = [];

    response.win.winBetlines.forEach(function(line){
      linesToHighlight.push(line.lineIdx);
    });

    me.storeData('linesToHighlight', linesToHighlight);
    me.storeData('betlineAnimating', null);
    me.storeData('shouldAnimate', linesToHighlight.length > 0);
  }

};

BetlinesModel = utils.extend(Model, BetlinesModel);