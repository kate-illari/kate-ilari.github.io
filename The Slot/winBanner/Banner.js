function Banner(container) {
  Banner.parent.constructor.apply(this, arguments);

  var center = utils.getReelAreaCenter();

  this.state = 'idle';
  this.bannerBg = this.createGraphics();
  this.text = this.createText();
  this.alphaIncrement = 0.05;
  this.scaleFactor = 1;
  this.scaleIncrement = 0.01;
  this.alpha = 0;
  this.visible = false;
  this.position.set(center.x, center.y);
  this.bannerBg.maxWidth = this.bannerBg.width + 30;
  this.bannerBg.maxHeight = this.bannerBg.height + 30;

  this.addChild(this.bannerBg, this.text);
  container.addChild(this);

  utils.addToRenderLoop(this.update.bind(this));
}

Banner.prototype = {

  constructor: Banner,

  createGraphics: function () {
    var bannerBg = new PIXI.Graphics(),
      rectWidth = 300,
      rectHeigth = 150,
      rectRad = 10;

    bannerBg.lineStyle(2, 0x000000, 1);
    bannerBg.beginFill(0xFFFFFF, 1);
    bannerBg.drawRoundedRect( -rectWidth / 2, -rectHeigth / 2, rectWidth, rectHeigth, rectRad);
    bannerBg.endFill();

    return bannerBg;
  },

  createText: function () {
    var txt = new PIXI.Text('');
    txt.x = 0;
    txt.y = 0;
    txt.anchor.set(0.5, 0.5);

    return txt;
  },

  updateText: function (win) {
    this.text.text = "TOTAL WIN: " + win;
  },

  play: function (win) {
    var me = this;

    me.visible = true;
    me.state = 'fadeIn';
    me.updateText(win);
    me.alphaIncrement = Math.abs(me.alphaIncrement);
  },

  update: function () {
    var me = this;

    switch(me.state) {
      case 'fadeIn': me.fadeIn();
        break;
      case 'scalingIn': me.scaleIn();
        break;
      case 'scalingOut': me.scaleOut();
        break;
      case 'fadeOut': me.fadeOut();
        break;
    }

  },

  fadeIn: function () {
    var me = this;

    me.alpha += me.alphaIncrement;
    if (me.alpha + me.alphaIncrement > 1) {
      me.state = 'scalingIn';
    }
  },

  fadeOut: function () {
    var me = this;

    me.alpha -= me.alphaIncrement;
    if(me.alpha + me.alphaIncrement < 0){
      me.stop();
    }
  },

  scaleIn: function () {
    var me = this;

    me.scaleFactor += me.scaleIncrement;
    me.scale.set(me.scaleFactor);

    if (me.scaleFactor + me.scaleIncrement > 1.3) {
      me.state = 'scalingOut';
    }
  },

  scaleOut: function () {
    var me = this;

    me.scaleFactor -= me.scaleIncrement;
    me.scale.set(me.scaleFactor);

    if (me.scaleFactor - me.scaleIncrement < 1) {
      me.state = 'fadeOut';
    }
  },

  stop: function () {
    var me = this;

    me.state = 'idle';
    me.visible = false;
  }


};

Banner = utils.extend(PIXI.Container, Banner);