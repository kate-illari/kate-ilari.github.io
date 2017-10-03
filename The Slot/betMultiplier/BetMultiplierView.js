function BetMultiplierView(moduleName) {
  BetMultiplierView.parent.constructor.call(this, moduleName);
}

BetMultiplierView.prototype = {
  constructor: BetMultiplierView,

  init: function () {
    var me = this,
      root = utils.addContainer('betMultiplier');

    root.position.x = config.gamePanelPosition.betMultiplierX;

    root.position.y = config.gamePanelPosition.y;
    me.drawMultiplierElements(root);

    me.increaseButton.buttonUpCallBack = function () {
     me.onIncrease();
    };
    me.decreaseButton.buttonUpCallBack = function () {
      me.onDecrease();
    };
    me.root = root;
  },

  drawMultiplierElements: function (container) {
    var me = this,
        multiplier = me.model.readData('multiplier');

    me.decreaseButton = me.addButton(0, 10, 'minus', 'minus-dis');
    me.txt = me.addText(20, 0, multiplier);
    me.increaseButton = me.addButton(60, 10, 'plus', 'plus-dis');
    me.betIndicator = me.addBetLevelIndicator();

    me.updateLevel(multiplier);

    container.addChild(me.decreaseButton, me.txt, me.increaseButton, me.betIndicator);
  },

  addButton: function (x, y, image, imageDisabled) {
    var params = {
        x: x,
        y: y,
        img: image,
        imgDis: imageDisabled
      };

    return new Button(params);
  },

  addText: function (x, y, text) {
    var style = new PIXI.TextStyle({
      fill: '#ffffff',
      fontSize: 15,
      fontFamily: 'Verdana'
    });

    var txt = new PIXI.Text(text, style);
    txt.x = x;
    txt.y = y;

    return txt;
  },

  addBetLevelIndicator: function () {
    var multiplier = this.model.readData('multiplier'),
        rect = new PIXI.Graphics();

    rect.height = 100;
    rect.width = 100;

    return rect;
  },

  updateLevel: function (multiplier) {
    var rect = this.betIndicator;

    // rect.clear();
    rect.beginFill(0xFFFFFF);
    rect.lineStyle(1, 0xFFFFFF, 1);
    rect.drawRect(-5, 25, 70, 5);
    rect.endFill();
    rect.beginFill(0xBF7B00);
    rect.drawRect(-5, 25, rect.width / 10 * multiplier, 5);
  },

  onIncrease: function () {
    var me = this;

    me.changeBet('increase');
  },

  onDecrease: function () {
    var me = this;

    me.changeBet('decrease');
  },

  changeBet: function (action) {
    var me = this,
        multiplier = me.model.readData('multiplier');


    if(action === 'increase'){
      multiplier += 1;
    } else if(action === 'decrease'){
      multiplier -= 1;
    }

    if(multiplier === 10){
      me.increaseButton.disable();
    } else if(multiplier === 1){
      me.decreaseButton.disable();
    } else {
      me.increaseButton.enable();
      me.decreaseButton.enable();
    }

    me.txt.text = multiplier;
    me.updateLevel(multiplier);
    me.model.storeData('multiplier', multiplier);
    me.fireEvent('view:betChanged', multiplier);
  }


};

BetMultiplierView = utils.extend(View, BetMultiplierView);
