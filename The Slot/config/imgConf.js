var textures = {
    "rocket": 'images/falcon-heavy-render.png',
    "button": 'images/BTN_Spin.png',
    "button-dis": 'images/BTN_Spin_dis.png',
    "background": 'images/bg.png',
    "SYM1": 'images/SYM1.png',
    "SYM2": 'images/SYM2.png',
    "SYM3": 'images/SYM3.png',
    "SYM4": 'images/SYM4.png',
    "SYM5": 'images/SYM5.png',
    "SYM6": 'images/SYM6.png',
    "redLine": 'images/red_square.png',
    "plus": 'images/plus1.png',
    "plus-dis": 'images/plusD1.png',
    "minus": 'images/minus1.png',
    "minus-dis": 'images/minusD1.png',
    "info": 'images/Info.png',
    "music": 'images/music.png',
    "arrow": 'images/arrow.png'
  },
  imgConfig = {
    getAllImages: function () {
      var links = [],
        linkName;

      for (linkName in textures) {
        links.push(textures[linkName])
      }

      return links;
    },
    getTextureByName: function (name) {
      return PIXI.loader.resources[textures[name]].texture
    }
  };
