eventHandler.addListener('eggShoot', onEggShoot);
eventHandler.addListener('eggHit', onEggHit);
eventHandler.addListener('guyKill', onGuyKill);
eventHandler.addListener('gameOver', onGameOver);

var eggShootSound = new Audio('sounds/Caw.mp3'),
    eggHitSound = new Audio('sounds/Dude.mp3'),
    guyKillSound = new Audio('sounds/Kill.mp3'),
  winSound = new Audio('sounds/Win.mp3'),
  loseSound = new Audio('sounds/Lose.mp3');

function onEggShoot() {
  var eggShootSoundClone = eggShootSound.cloneNode();
  eggShootSoundClone.volume = 0.5;
  if(totalEggs >= 0){
    eggShootSoundClone.play();
  }
}

function onEggHit() {
  var eggHitSoundClone = eggHitSound.cloneNode();
  eggHitSoundClone.volume = 0.7;
  eggHitSoundClone.play();
}

function onGuyKill() {
  var guyKillSoundClone = guyKillSound.cloneNode();
  guyKillSoundClone.volume = 0.7;
  guyKillSoundClone.play();
}

function onGameOver(){
  if(!guys.length){
    winSound.play();
  } else {
    loseSound.play();
  }
}