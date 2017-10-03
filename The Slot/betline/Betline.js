function Betline(line, container, func) {
  var image = imgConfig.getTextureByName('redLine'),
    i = 0,
    linePoints = [],
    linePoint;

  for (; i < line.length; i++) {
    linePoint = utils.getSymConfig(i, line[i]);
    linePoints.push(new PIXI.Point(linePoint.centerX, linePoint.centerY))
  }

  Betline.parent.constructor.apply(this, [image, linePoints]);

  this.visible = false;
  this.alpha = 0;
  this.isPlaying = false;
  this.increment = 0.02;
  this.callback = func;

  container.addChild(this);

  utils.addToRenderLoop(this.update.bind(this));
}

Betline.prototype = {
  constructor: Betline,

  play: function () {
    var me = this;

    me.isPlaying = true;
    me.visible = true;
    me.alpha = 0;
    me.increment = Math.abs(me.increment);
  },

  stop: function (shouldCallBack) {
    var me = this;

    me.isPlaying = false;
    me.visible = false;
    me.alpha = 0;

    if(shouldCallBack){
      me.callback();
    }
  },

  update: function () {
    var me = this;

    if (me.isPlaying) {
      me.alpha += me.increment;

      if (me.alpha + me.increment > 1) {
        me.increment = -me.increment;
      } else if (me.alpha + me.increment < 0) {
        me.stop(true);
      }
    }
  }


};

Betline = utils.extend(PIXI.mesh.Rope, Betline);