function WinSymbolsModel(moduleName) {
  WinSymbolsModel.parent.constructor.call(this, moduleName, "model");

}

WinSymbolsModel.prototype = {
  constructor: WinSymbolsModel,

  setupData: function () {

  }

};

WinSymbolsModel = utils.extend(Model, WinSymbolsModel);