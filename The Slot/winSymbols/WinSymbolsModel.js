function WinSymbolsModel(moduleName) {
  WinSymbolsModel.parent.constructor.call(this, moduleName, "model");

}

WinSymbolsModel.prototype = {
  constructor: WinSymbolsModel,

  processServerResponse: function (response) {
    var me = this,
        winBetlines = response.win.winBetlines;

    me.storeData('winBetlines', winBetlines);
  }

};

WinSymbolsModel = utils.extend(Model, WinSymbolsModel);