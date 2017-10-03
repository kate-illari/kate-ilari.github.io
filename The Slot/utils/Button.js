function Button(buttonParams) {
  Button.parent.constructor.apply(this, arguments);

  this.activeTexture = (imgConfig.getTextureByName(buttonParams.img));
  this.disabledTexture = (imgConfig.getTextureByName(buttonParams.imgDis));

  this.sprite = new PIXI.Sprite();
  this.sprite.texture = this.activeTexture;
  this.sprite.position.set(buttonParams.x, buttonParams.y);
  this.sprite.anchor.set(0.5, 0.5);
  this.sprite.alpha = 0.7;
  this.enabled = true;
  this.isPressed = false;
  this.buttonMode = true;

  this.initInteractive();
}

Button.prototype = {
  constructor: Button,

  onButtonDown: function () {
    if (this.enabled) {
      this.isPressed = true;
      this.sprite.scale.set(0.9, 0.9);
    }
  },
  onButtonHover: function () {
    if(this.enabled) {
      this.sprite.alpha = 1;
    }
  },
  onButtonUnHover: function () {
    this.sprite.alpha = 0.7;
  },
  onButtonUp: function () {
    if (this.enabled && this.isPressed) {
      this.isPressed = false;
      this.buttonUpCallBack();
      this.sprite.scale.set(1, 1);
    }
  },
  onMouseUpOutside: function () {
    this.isPressed = false;
    this.sprite.scale.set(1, 1);
  },

  initInteractive: function() {
    this.interactive = true;
    this.on('mousedown', this.onButtonDown);
    this.on('mouseover', this.onButtonHover);
    this.on('mouseout', this.onButtonUnHover);
    this.on('mouseup', this.onButtonUp);
    this.on('mouseupoutside', this.onMouseUpOutside);

    this.addChild(this.sprite);
  },

  disable: function () {
    this.enabled = false;
    this.sprite.texture = this.disabledTexture;
  },

  enable: function () {
    this.enabled = true;
    this.sprite.texture = this.activeTexture;
  },

  buttonUpCallBack: function() {}
};

Button = utils.extend(PIXI.Container, Button);