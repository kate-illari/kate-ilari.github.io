function WinBannerView(moduleName) {
  WinBannerView.parent.constructor.call(this, moduleName);

}

WinBannerView.prototype = {
  constructor: WinBannerView,

  init: function () {
    var me = this,
        root = utils.addContainer('winbanner'),
        center = utils.getReelAreaCenter(),
        banner = new Banner(root, center.x, center.y);

    root.visible = false;

    me.root = root;
    me.banner = banner;
  },

  animateWinBanner: function (win) {
    var me = this;

    me.root.visible = true;
    me.banner.play(win);
  }


};

WinBannerView = utils.extend(View, WinBannerView);