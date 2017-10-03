function WinBannerView(moduleName) {
  WinBannerView.parent.constructor.call(this, moduleName);

}

WinBannerView.prototype = {
  constructor: WinBannerView,

  init: function () {
    var me = this,
        root = utils.addContainer('winbanner'),
        banner = new Banner(root);

    root.visible = false;

    me.root = root;
    me.banner = banner;
  },

  animateWinBanner: function (win) {
    var me = this;

    console.log(me.banner);

    me.root.visible = true;
    me.banner.play(win);
  }


};

WinBannerView = utils.extend(View, WinBannerView);