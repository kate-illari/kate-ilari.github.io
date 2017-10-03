function WinBanner() {
  WinBanner.parent.constructor.apply(this, arguments);
}

WinBanner.prototype = {
  constructor: WinBanner,

  getDefaultMVCClasses: function () {
    return {
      model: Model,
      view: WinBannerView,
      controller: WinBannerController
    }
  }
};

WinBanner = utils.extend(Module, WinBanner);