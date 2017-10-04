function AnimationManagerView(moduleName) {
  AnimationManagerView.parent.constructor.call(this, moduleName);
  this.layers = [
    "background",
    "reels",
    "dimmer",
    "betlines",
    "wimSymbols",
    "button",
    "betMultiplier",
    "gamePanel",
    "lineWin",
    "winbanner"
  ];
}

AnimationManagerView.prototype = {
  constructor: AnimationManagerView,
  init: function () {
    this.app = new PIXI.Application(config.resolution.width, config.resolution.height, {transparent: true});
    this.globalContainer = new PIXI.Container();
    document.body.appendChild(this.app.view);

    this.app.stage.addChild(this.globalContainer);
    // this.app.stop();
  },

  addContainer: function (name) {
    var container = new PIXI.Container();

    function compareNumeric(a, b) {
      return a.id - b.id;
    }

    container.id = this.layers.indexOf(name);

    this.globalContainer.addChild(container);
    this.globalContainer.children.sort(compareNumeric);

    if (this.layers.indexOf(name) === -1) {
      console.error("no such layer: ", name)
    }

    return container;
  },

  addToRenderLoop: function (callback) {
    this.app.ticker.add(callback)
  }
};

AnimationManagerView = utils.extend(View, AnimationManagerView);
