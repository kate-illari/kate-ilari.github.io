function Paytable() {
  Paytable.parent.constructor.apply(this, arguments);
}

Paytable.prototype = {
  constructor: Paytable,

  getDefaultMVCClasses: function () {
    return {
      model: Model,
      view: PaytableView,
      controller: PaytableController
    }
  }
};

Paytable = utils.extend(Module, Paytable);