function PaytableView(moduleName) {
  PaytableView.parent.constructor.call(this, moduleName);

}

PaytableView.prototype = {
  constructor: PaytableView,

  SYM_DESCR_TEXT_STYLE: {
    fill: ['#d53369', '#4B0082'],
    stroke: 'black',
    fontWeight: 'bold',
    strokeThickness: 1,
    fontSize: 18,
    fontFamily: 'Verdana'
  },

  SYM_PARAMS: {
    width: 100,
    height: 70
  },

  TITLE_CONFIG: {
    fontSize: 32,
    y: 120
  },

  DESCR_TEXT_OFFSET: 30,

  POSITIONS: {
    'SYM1': {x: 0, y: 0},
    'SYM2': {x: 300, y: 0},
    'SYM3': {x: 600, y: 0},
    'SYM4': {x: 0, y: 200},
    'SYM5': {x: 300, y: 200},
    'SYM6': {x: 600, y: 200}
  },

  BUTTON_POSITIONS: {
    left: {x: 140, y: 360 },
    right: {x: 1060, y: 360 }
  },

  BETLINE_POSITIONS: [
    {x: 0, y: 0},
    {x: 300, y: 0},
    {x: 600, y: 0},
    {x: 150, y: 200},
    {x: 450, y: 200}
  ],

  init: function () {
    var me = this,
      root = utils.addContainer('paytable'),
      bg = me.drawPaytableBg(root),
      infoButton = utils.initInfoButton(root, 80, 700, 'info'),
      page1 = me.drawPage1(bg),
      page2 = me.drawPage2(bg);

    infoButton.buttonUpCallBack = function () {
      me.onInfoButtonUp();
    };

    root.visible = false;
    me.root = root;
    me.page1 = page1;
    me.page2 = page2;
  },

  onInfoButtonUp: function () {
    this.fireEvent('view:InfoButtonUp');
  },

  show: function () {
    this.root.visible = true;
  },

  drawPaytableBg: function (container) {
    var me = this,
        bgContainer = new PIXI.Container(),
        bg = new PIXI.Graphics(),
        paytableWidth = config.resolution.width - 200,
        paytableHeight = config.resolution.height - 200,
        x = config.resolution.width / 2 - paytableWidth / 2,
        y = config.resolution.height / 2 - paytableHeight / 2,
        rectRad = 15,
        backgroundWidth = config.resolution.width,
        backgroundHeight = config.resolution.height;


    //darkening game area behind paytable
    bg.beginFill(0x000000, 0.6);
    bg.drawRect(0, 0, backgroundWidth, backgroundHeight);
    bg.endFill();

    //drawing paytable background
    bg.beginFill(0xF0F8FF, 0.9);
    bg.drawRoundedRect(x, y, paytableWidth, paytableHeight, rectRad);
    bg.endFill();


    bg.interactive = true;
    bgContainer.addChild(bg);
    me.addArrows(bgContainer);


    container.addChild(bgContainer);

    return bgContainer;
  },

  addArrows: function (container) {
    var me = this,
        pageButtonRight = me.addButton(me.BUTTON_POSITIONS.right.x, me.BUTTON_POSITIONS.right.y, 'arrow'),
        pageButtonLeft = me.addButton(me.BUTTON_POSITIONS.left.x, me.BUTTON_POSITIONS.left.y, 'arrow');


    container.addChild(pageButtonRight, pageButtonLeft);

    pageButtonLeft.sprite.rotation = 180 * PIXI.DEG_TO_RAD;

    pageButtonLeft.buttonUpCallBack = me.onButtonClick.bind(me);
    pageButtonRight.buttonUpCallBack = me.onButtonClick.bind(me);

    me.pageButtonRight = pageButtonRight;
    me.pageButtonLeft = pageButtonLeft;
  },

  onButtonClick: function () {
    this.page1.visible = !this.page1.visible;
    this.page2.visible = !this.page2.visible;
  },

  addButton: function (x, y, img) {
    var params = {
      x: x,
      y: y,
      img: img,
      imgDis: img
    };

    return new Button(params)
  },

  drawPage1: function (container) {
    var me = this,
        page1Container = new PIXI.Container(),
        symbolsContainer = new PIXI.Container(),
        page1Title = me.addPageTitle('SYMBOLS PAYOUTS', page1Container),
        paytable = config.paytable,
        symbols = [],
        sym,
        symDescr;

    for(sym in paytable) {
      symDescr = me.initSymDescr(sym, paytable[sym], symbolsContainer);
      symbols.push(symDescr);
    }

    me.symbols = symbols;

    symbolsContainer.position.set(240, 200);
    page1Container.addChild(symbolsContainer);
    container.addChild(page1Container);

    return page1Container
  },

  addPageTitle: function (text, container) {
    var me = this,
        title = new PIXI.Text(text, new PIXI.TextStyle(me.SYM_DESCR_TEXT_STYLE)),
        x = config.resolution.width / 2;

    title.anchor.set(0.5, 0);
    title.style.fontSize = me.TITLE_CONFIG.fontSize;
    title.position.set(x, me.TITLE_CONFIG.y);

    container.addChild(title);

    return title;
  },

  initSymDescr: function (symKey, sym, container) {
    var me = this,
        symDescr = new PIXI.Container(),
        descrText = me.addDescrTexts(symKey, sym, symDescr),
        imgParams = {
            img: symKey,
            container: symDescr,
            width: me.SYM_PARAMS.width,
            height: me.SYM_PARAMS.height,
            x: 0,
            y: 0
          },
          symImg = new Symbol(imgParams);

    symDescr.position.set(me.POSITIONS[symKey].x, me.POSITIONS[symKey].y);
    container.addChild(symDescr);

    return symDescr;
  },

  addDescrTexts: function (symKey, sym, container) {
    var me = this,
        textContainer = new PIXI.Container(),
        style = new PIXI.TextStyle(me.SYM_DESCR_TEXT_STYLE),
        y = 0,
        payout,
        text;

      for(payout in sym){
        text = new PIXI.Text('', style);
        text.text = payout + ': ' + sym[payout];
        text.anchor.set(0.5, 0);
        text.position.set(me.SYM_PARAMS.width /2, y);
        y += me.DESCR_TEXT_OFFSET;
        textContainer.addChild(text);
      }

    textContainer.position.y = me.SYM_PARAMS.height + 20;
    container.addChild(textContainer);

    return textContainer;
  },

  drawPage2: function (container) {
    var me = this,
        page2Container = new PIXI.Container(),
        betlinesContainer = new PIXI.Container(),
        page2Title = me.addPageTitle('WINNING LINES', page2Container),
        betlines = me.drawBetlines(betlinesContainer);


    betlinesContainer.position.set(240, 200);
    page2Container.visible = false;
    page2Container.addChild(betlinesContainer);
    container.addChild(page2Container);

    return page2Container;
  },

  drawBetlines: function(container){
    var me = this,
        betlines = [],
        betline;

    config.betlines.forEach(function (line, lineIdx) {
      betline = me.createBetline(line, lineIdx, container);
      betlines.push(betline);
    })
  },

  createBetline: function (line, lineIdx, container) {
      var me = this,
          betlineContainer = new PIXI.Container(),
          betline = new PaytableBetline(line, betlineContainer),
          betlineNum = new PIXI.Text(lineIdx + 1);

    betlineNum.anchor.set(0.5, 0);
    betlineNum.position.set(51, 102);
    betlineContainer.position.set(me.BETLINE_POSITIONS[lineIdx].x, me.BETLINE_POSITIONS[lineIdx].y);
    betlineContainer.addChild(betlineNum);
    container.addChild(betlineContainer);

    return betline
  },

  hide: function () {
    this.root.visible = false;
    this.fireEvent('view:PaytableClosed');
  }

};

PaytableView = utils.extend(View, PaytableView);