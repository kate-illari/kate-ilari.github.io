function SoundsManagerView(moduleName) {
  SoundsManagerView.parent.constructor.call(this, moduleName);

}

SoundsManagerView.prototype = {
  constructor: SoundsManagerView,

  init: function () {
    var me = this;

    me.backgroundSound = new Audio('audio/Background.mp3');
    me.spinStartSound = new Audio('audio/StartSpin.mp3');
    me.betChangeSound = new Audio('audio/pop.mp3');
    me.reelStopSound = new Audio('audio/reelStop.mp3');
    me.winSound = new Audio('audio/Win.mp3');
    me.bigWinSound = new Audio('audio/BigWin.mp3');

    me.toggleBgSound();
  },

  toggleBgSound: function () {
    var me = this;

    me.backgroundSound.volume = 0.4;
    me.backgroundSound.loop = true;
    if(me.backgroundSound.paused){
      me.backgroundSound.play();
    } else {
      me.backgroundSound.pause();
    }
  },

  playSpinStartSound: function () {
    this.spinStartSound.play();
  },

  playBetChangeSound: function () {
    var betChangeSoundClone = this.betChangeSound.cloneNode();
    betChangeSoundClone.play();
  },

  playReelStopSound: function () {
    var reelStopSoundClone = this.reelStopSound.cloneNode();
    reelStopSoundClone.play();
  },

  playWinSound: function () {
    this.winSound.volume = 0.5;
    this.winSound.play();
  },

  playBigWinSound: function () {
    this.winSound.volume = 0.7;
    this.bigWinSound.play();
  }

};

SoundsManagerView = utils.extend(View, SoundsManagerView);