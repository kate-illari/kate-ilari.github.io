function Bird(stage) {
  this.sprite = new PIXI.Sprite(id['bird.png']);
  this.sprite.x = stage.width - this.sprite.width;
  this.sprite.y = this.sprite.height;
  this.fliesRight = false;
  this.speed = 3;
  this.accelerate = function () {
    this.speed += 0.2;
  };
  this.move = function () {
    if ( this.fliesRight ){
      this.sprite.x += this.speed;
      if ( this.sprite.x > stage.width - this.sprite.width ){
        this.fliesRight = false;
        this.sprite.scale.x = 1;
      }
    } else {
      this.sprite.x -= this.speed;
      if ( this.sprite.x < 0 + this.sprite.width ){
        this.fliesRight = true;
        this.sprite.scale.x = -1;
      }
    }
  };
  this.shoot = function () {
    if(totalEggs > 0){
      new Egg(this.sprite.x, this.sprite.y + this.sprite.height, stage, this.speed, this.fliesRight);
    }
    totalEggs--;
    eventHandler.fireEvent('eggShoot');
  };
  stage.addChild(this.sprite);
}

