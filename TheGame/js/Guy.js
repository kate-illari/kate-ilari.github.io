function Guy(stage, spacing, yOffset, idx) {
  this.sprite = new PIXI.Sprite(id['guy.png']);
  this.sprite.x = randomInt(0, stage.width - this.sprite.width);
  this.sprite.y = spacing * idx + yOffset;
  this.sprite.anchor.set(0.5, 0.5);
  this.health = 3;
  this.hbar = new HealthBar(0, -this.sprite.width, this.sprite, this.health);

  this.becomeAngry = function () {
    this.health -= 1;
    this.hbar.updateHealth(this.health);
    this.hbar.toggleVisibility();
    var me = this;
    me.sprite.texture = id['angry-guy.png'];
    if(!this.health){
      eventHandler.fireEvent('guyKill');
    } else {
      eventHandler.fireEvent('eggHit');
    }
    setTimeout(function () {
      me.sprite.texture = id['guy.png'];
      me.hbar.toggleVisibility();
    }, 500);
  };
  this.remove = function () {
    var me = this;
    setTimeout(function () {
      stage.removeChild(me.sprite);
      me.toBeRemoved = true;
    }, 500)
  };
  guys.push(this);
  stage.addChild(this.sprite);

}