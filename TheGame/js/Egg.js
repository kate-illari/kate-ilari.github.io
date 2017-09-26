function Egg(x, y, stage, birdSpeed, dirRight) {
  this.sprite = new PIXI.Sprite(id['egg.png']);
  this.sprite.rotation = 0.8;
  this.sprite.x = x;
  this.sprite.y = y;
  this.sprite.anchor.set(0.5, 0.5);
  this.sprite.scale.set(0.5, 0.5);
  this.speed = {
    x: dirRight ? birdSpeed : -birdSpeed,
    y: 0.5
  };
  this.acceleration = {
    x: 0.06,
    y: 0.05
  };
  this.accelerate = function () {
    if(Math.abs(this.speed.x) < this.acceleration.x){
      this.speed.x = 0;
    } else {
      this.speed.x = dirRight ? this.speed.x - this.acceleration.x : this.speed.x + this.acceleration.x;
    }
    this.speed.y += this.acceleration.y;
  };
  this.rotate = function () {
    var tan = this.speed.x / this.speed.y;
    this.sprite.rotation = 0.8 - Math.atan(tan);
  };
  this.move = function () {
    this.accelerate();
    this.rotate();
    this.sprite.x += this.speed.x;
    this.sprite.y += this.speed.y;
    if(this.sprite.y > renderer.height){
      this.remove();
    }
  };
  this.remove = function () {
    stage.removeChild(this.sprite);
    this.toBeRemoved = true;
  };
  eggs.push(this);
  stage.addChild(this.sprite);
}
