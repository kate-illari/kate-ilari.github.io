function Server() {
  Server.parent.constructor.apply(this, arguments);
}

Server.prototype = {
  constructor: Server,

  getDefaultMVCClasses: function () {
    return {
      model: ServerModel,
      view: View,
      controller: ServerController
    }
  }
};

Server = utils.extend(Module, Server);