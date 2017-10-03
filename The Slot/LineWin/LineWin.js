function LineWin() {
  LineWin.parent.constructor.apply(this, arguments);
}

LineWin.prototype = {
  constructor: LineWin,

  getDefaultMVCClasses: function () {
    return {
      model: Model,
      view: View,
      controller: LineWinController
    }
  }
};

LineWin = utils.extend(Module, LineWin);