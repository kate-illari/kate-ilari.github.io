var modules = [
    "AnimationManager",
    "SoundsManager",
    "Server",
    "BetMultiplier",
    "GamePanel",
    "WinBanner",
    "LineWin",
    "SpinButton",
    "WinSymbols",
    "Dimmer",
    "Reels",
    "Betlines",
    "Background"
],
  createdModules = {},
  i, components, module,
  moduleName;

PIXI.loader
  .add(imgConfig.getAllImages())
  .load(loadModules);



function loadModules() {
  for(i = 0; i < modules.length; i++){
    moduleName = modules[i];
    createdModules[moduleName] = new window[moduleName];
    module = createdModules[moduleName];
    //components is a list of constructors for Model, View and Controller
    components = module.getDefaultMVCClasses();
    module.model = new components.model(moduleName);
    module.controller = new components.controller(moduleName);
    module.view = new components.view(moduleName);

    module.controller.model = module.model;
    module.controller.view = module.view;

    module.view.model = module.model;

    module.model.setupData();
    module.controller.setupEvents();
    module.view.init();
  }

  createdModules.AnimationManager.view.app.start();
}