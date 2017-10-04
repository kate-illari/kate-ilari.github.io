function WinSymbols() {
  WinSymbols.parent.constructor.apply(this, arguments);
}

WinSymbols.prototype = {
  constructor: WinSymbols,

  getDefaultMVCClasses: function () {
    return {
      model: WinSymbolsModel,
      view: WinSymbolsView,
      controller: WinSymbolsController
    }
  }
};

WinSymbols = utils.extend(Module, WinSymbols);