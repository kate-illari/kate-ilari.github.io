function ServerModel(moduleName) {
  ServerModel.parent.constructor.call(this, moduleName, "model");
}

ServerModel.prototype = {

  WILD: 'SYM1',

  constructor: ServerModel,

  setupData: function () {
    this.storeData('betMultiplier', config.initialBetMultiplier)
  },

  calculateResult: function () {
    var me = this,
      serverResponse = {
        symsToStopOn: [],
        win: {}
      },
      outcome;

    config.reels.forEach(function (item) {
      serverResponse.symsToStopOn.push(me.getRandomInt(item.reelStrip));
    });

    outcome = me.getOutcome(serverResponse.symsToStopOn);
    serverResponse.win = me.checkWin(outcome);

    return serverResponse;
  },

  getRandomInt: function (reel) {
    var min = 0,
      max = reel.length - 1;

    return utils.randomInt(min, max);
  },

  getOutcome: function (symsArray) {
    var allReelsResult = [];

    symsArray.forEach(function (symIdx, reelIdx) {
      var reel = config.reels[reelIdx],
          reelSyms = [],
          idxToPush;

      for (var i = 0; i < reel.visibleSyms; i++) {
        idxToPush = (symIdx + i) % reel.reelStrip.length;
        reelSyms.push(reel.reelStrip[idxToPush]);
      }

      allReelsResult.push(reelSyms);
    });

    return allReelsResult;
  },

  updateBet: function (multiplier) {
    this.storeData('betMultiplier', multiplier)
  },

  checkWin: function (outcome) {
    var me = this,
        multiplier = me.readData('betMultiplier'),
        matchedSyms,
        linewin,
        windetails = {
          winBetlines: [],
          totalWin: 0
        },
        betlines = config.betlines,
        betline;

    betlines.forEach(function (line, lineIdx) {

      betline = me.getBetline(outcome, line);
      matchedSyms = me.checkBetline(betline);
      linewin = config.paytable[matchedSyms.sym][matchedSyms.count] * multiplier;

      if(linewin){
        windetails.winBetlines.push({
          lineIdx: lineIdx,
          symbol: matchedSyms.sym,
          symsCount: matchedSyms.count,
          lineWin: linewin
        });
        windetails.totalWin += linewin;
      }
    });

    return windetails;
  },

  checkBetline: function (arr) {
    var me = this,
      checkSym = me.getSymToCheck(arr),
      result = {
        sym: checkSym,
        count: 0
      },
      i = 0;


    for (; i < arr.length; i++) {
      if (arr[i] === checkSym || arr[i] === me.WILD) {
        result.count++;
        if (i === arr.length - 1) {
          return result;
        }
      } else {
        return result;
      }
    }
  },

// {"sym1": 3}

  getSymToCheck: function (arr) {
    var me = this,
        i = 0;

    for (; i < arr.length; i++) {
      if (arr[i] !== me.WILD) {
        return arr[i];
      }
    }
    return me.WILD;
  },

  getBetline: function (outcome, betline) {
    var betlineSyms = [];

    for (var i = 0; i < betline.length; i++) {
      if(!outcome[i][betline[i]]){
        // console.log(outcome, betline, i);
      }
      betlineSyms.push(outcome[i][betline[i]]);
    }
    return betlineSyms;
  }

  //////////////////
  // var win = 0;
  //
  // console.log(allReelsResult);
  //
  // for (var i = 0; i < allReelsResult.length - 1; i++) {
  //   for (var j = 0; j < allReelsResult[i].length; j++) {
  //     var next = i + 1,
  //       currentWin = 0;
  //
  //     if (allReelsResult[0][j] === allReelsResult[next][j]) {
  //       (allReelsResult[0][j] === 'SYM1') ? currentWin += 500 : currentWin += 100;
  //
  //
  //       // console.log("YOU'VE WON " + currentWin + " ON LINE " + j, allReelsResult[0][j]);
  //       win += currentWin;
  //     }
  //   }
  // }
  //
  // if(win){
  //   console.log("TOTAL WIN: " + win + "!");
  // }
  //////////////////


};

ServerModel = utils.extend(Model, ServerModel);