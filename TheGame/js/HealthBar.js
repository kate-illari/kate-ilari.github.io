function HealthBar(x, y, parent, health) {
  this.rect = new PIXI.Graphics();
  this.rect.visible = false;
  this.toggleVisibility = function () {
    this.rect.visible = !this.rect.visible;
  };
  this.height = 7;
  this.width = 40;
  this.healthUnitW = this.width / health;
  this.updateHealth = function (health) {
    this.healthWidth = this.healthUnitW * health;
    this.rect.clear();
    this.rect.beginFill(0x66CCFF);
    this.rect.lineStyle(1, 0xFF3300, 1);
    this.rect.drawRoundedRect(-this.width/2, -this.height/2, this.width, this.height, 3);
    this.rect.endFill();
    this.rect.beginFill(0xFF3300);
    this.rect.drawRoundedRect(-this.width/2, -this.height/2, this.healthWidth, this.height, 3);
    this.rect.x = x;
    this.rect.y = y;
  };
  this.updateHealth(health);
  parent.addChild(this.rect);
}