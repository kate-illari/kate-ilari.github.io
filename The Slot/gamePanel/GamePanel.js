function GamePanel() {
  GamePanel.parent.constructor.apply(this, arguments);
}

GamePanel.prototype = {
  constructor: GamePanel,

  getDefaultMVCClasses: function () {
    return {
      model: Model,
      view: GamePanelView,
      controller: GamePanelController
    }
  }
};

GamePanel = utils.extend(Module, GamePanel);