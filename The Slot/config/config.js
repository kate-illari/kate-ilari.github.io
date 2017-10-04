var config = {
  initialBalance: 1000,
  initialBetMultiplier: 5,
  resolution: {
    width: 1200,
    height: 725
  },
  gamePanelPosition: {
    betX: 0,
    balanceX: 200,
    winX: 500,
    betMultiplierX: 1000,
    y: 690
  },
  reelsContainerPosition: {
    x: 150,
    y: 45
  },
  buttonPushStrength: 3.5,
  spinbutton: {
    x: 1000,
    y: 400
  },
  symbol: {
    height: 100,
    width: 140,
    offset: 20
  },
  reels: [
    {
      visibleSyms: 5,
      verticalOffset: 0,
      reelStrip: ['SYM1', 'SYM2', 'SYM3', 'SYM4', 'SYM5', 'SYM6']
    },
    {
      visibleSyms: 3,
      verticalOffset: 120,
      reelStrip: ['SYM1', 'SYM2', 'SYM3', 'SYM4', 'SYM5', 'SYM6']
    },
    {
      visibleSyms: 1,
      verticalOffset: 240,
      reelStrip: ['SYM1', 'SYM2', 'SYM3', 'SYM4', 'SYM5', 'SYM6']
    },
    {
      visibleSyms: 3,
      verticalOffset: 120,
      reelStrip: ['SYM1', 'SYM2', 'SYM3', 'SYM4', 'SYM5', 'SYM6']
    },
    {
      visibleSyms: 5,
      verticalOffset: 0,
      reelStrip: ['SYM1', 'SYM2', 'SYM3', 'SYM4', 'SYM5', 'SYM6']
    }

  ],
  paytable: {
    'SYM1': {
      5: 50
    },
    'SYM2': {
      3: 2,
      4: 3,
      5: 4
    },
    'SYM3': {
      3: 1,
      4: 2,
      5: 3
    },
    'SYM4': {
      3: 1,
      4: 2,
      5: 3
    },
    'SYM5': {
      3: 15,
      4: 25,
      5: 35
    },
    'SYM6': {
      3: 20,
      4: 30,
      5: 40
    }
  },
  betlines: [
    [0, 0, 0, 0, 0],
    [1, 1, 0, 1, 1],
    [2, 1, 0, 1, 2],
    [3, 1, 0, 1, 3],
    [4, 2, 0, 2, 4]
  ]
};