var utils = {

  extend: function (parent, child) {
    // child.parent = parent.prototype;
    // child.prototype = Object.create(parent.prototype);
    // child.prototype.constructor = child;
    // if(child.addToProto && child.addToProto instanceof Object){
    //     for (var key in child.addToProto){
    //         if(child.addToProto.hasOwnProperty(key)){
    //             child.prototype[key] = child.addToProto[key]
    //         }
    //     }
    //     delete child.addToProto;
    // }
    // console.dir(child);
    // return child

    var bufferProto = spread({}, child.prototype);

    child.parent = parent.prototype;
    child.prototype = Object.create(parent.prototype);
    child.prototype = spread(child.prototype, bufferProto);
    return child;
  },

  addContainer: function (name) {
    return createdModules.AnimationManager.view.addContainer(name);
  },

  addToRenderLoop: function (callback) {
    return createdModules.AnimationManager.view.addToRenderLoop(callback);
  },

  randomInt: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  getSymConfig: function(reelIdx, symIdx) {
    var symConfig = {},
        symWidth = config.symbol.width,
        symHeight = config.symbol.height,
        symOffset = config.symbol.offset;

    symConfig.left = reelIdx * (symWidth + symOffset) + config.reelsContainerPosition.x;
    symConfig.top = config.reels[reelIdx].verticalOffset + (symHeight + symOffset) * symIdx + config.reelsContainerPosition.y;
    symConfig.centerX = symConfig.left + (symWidth + symOffset) / 2;
    symConfig.centerY = symConfig.top + (symHeight + symOffset) / 2;

    return symConfig;
  },

  getReelAreaCenter: function () {
    var initialX = config.reelsContainerPosition.x,
        initialY = config.reelsContainerPosition.y,
        reelWidth = config.symbol.width + config.symbol.offset,
        symsHeight = config.symbol.height + config.symbol.offset,
        reelsAmt = config.reels.length,
        visibleSyms = [],
        reelAreaWidth,
        reelAreaHeight,
        maxSymsAmt,
        i = 0;

    for(; i < reelsAmt; i++){
      visibleSyms.push(config.reels[i].visibleSyms)
    }

    maxSymsAmt = Math.max.apply(null, visibleSyms);
    reelAreaWidth = reelWidth * reelsAmt;
    reelAreaHeight = symsHeight * maxSymsAmt;

    return {x: initialX + reelAreaWidth / 2, y: initialY + reelAreaHeight / 2}
  }

};

function spread(targetObj, sourceObj) {
  var prop;

  for (prop in sourceObj) {
    if (sourceObj.hasOwnProperty(prop)) {
      targetObj[prop] = sourceObj[prop];
    }
  }
  return targetObj;
}

