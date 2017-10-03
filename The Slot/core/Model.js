function Model(moduleName) {
    Model.parent.constructor.call(this, moduleName, "model");
    this.data = {};
}

Model.prototype = {
    constructor: Model,

    setupData: function () {
        //stub
    },

    storeData: function (key, value) {
        this.data[key] = value;
    },

    readData: function (key) {
        return this.data[key];
    },

    setState: function (state) {
      this.state = state;
    },

    isState: function (state) {
      return this.state === state;
    }
};

Model = utils.extend(Observable, Model);