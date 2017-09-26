var Container = PIXI.Container;
var autoDetectRenderer = PIXI.autoDetectRenderer;
var resources = PIXI.loader.resources;
var id;

var stage = new Container();
var renderer = autoDetectRenderer(640, 410, {antialias: false, transparent: true, resolution: 1});
document.body.appendChild(renderer.view);

renderer.view.style.display = "block";
renderer.view.style.margin = "auto";

PIXI.loader
  .add(['images/whenBirdsFly.json'])
  .load(setup);
var bird,
    numberOfGuys = 3,
    eggs = [], guys = [],
    totalEggs = 25,
    eggCounter,
    gameActive = true,
    gameOver;


function Bg(stage) {
  this.sprite = new PIXI.Sprite(id['bbg.jpg']);
  this.sprite.position.set(0, 0);
  stage.addChild(this.sprite);
}

function setup() {
  id = PIXI.loader.resources['images/whenBirdsFly.json'].textures;
  new Bg(stage);
  bird = new Bird(stage);
  eggCounter = new EggCounter(stage);
  for(var i = 0; i < numberOfGuys; i++){
    new Guy(stage, 20, 220, i);
  }
  gameOver = new GameOver(stage);

  keyboard(32).press = function () {
    bird.shoot();
    bird.accelerate();
  };

  gameLoop();
}

function gameLoop() {
  requestAnimationFrame(gameLoop);
  if(gameActive){
    play();
  }
  renderer.render(stage)
}

function play() {
  bird.move();
  for(var i = 0; i < eggs.length; i++){
    eggs[i].move();
    for(var k = 0; k < guys.length; k++){
      if(collisionCheck(eggs[i].sprite, guys[k].sprite)){
        eggs[i].remove();
        guys[k].becomeAngry();
        if(!guys[k].health){
          guys[k].remove();
        }
      }
    }
  }
  cleanUp(['eggs', 'guys']);
  if(totalEggs <= 0 && !eggs.length || !guys.length){
    eventHandler.fireEvent('gameOver');
  }
}

function cleanUp(arr) {
  for(var i = 0; i < arr.length; i++){
    window[arr[i]] = window[arr[i]].filter(function (item) {
      return !item.toBeRemoved
    })
  }
}

