function GameOver(stage) {
  var me = this;
  this.textSprite = new PIXI.Text(
    "",
    {fontFamily: "Arial", fontSize: 72, fill: "red", fontWeight: 700}
  );
  this.textSprite.position.set(150, 150);
  this.textSprite.visible = false;
  this.onGameOver = function(){
    me.showGameOver();
    setTimeout(function () {
      gameActive = false;
    }, 800)
  };
  this.showGameOver = function () {
    var text;
    if(!guys.length){
      text = "YOU WIN!";
    } else {
      text = "YOU LOST!";
    }
    this.textSprite.visible = true;
    this.textSprite.text = text;
  };
  stage.addChild(this.textSprite);
  eventHandler.addListener('gameOver', me.onGameOver);
}