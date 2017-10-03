function Observable(moduleName, type) {
    this.events = {};
    this.moduleName = moduleName;
    this.type = type;

    Observable.listeneres.push(this);
}

Observable.listeneres = [];

Observable.prototype.on = function (eventsConfig) {
    for(var key in eventsConfig){
        if(eventsConfig.hasOwnProperty(key)){
            this.events[key] = eventsConfig[key]
        }
    }
};

Observable.prototype.fireEvent = function (eventName) {
    var args = Array.prototype.slice.apply(arguments, [1, arguments.length]),
        moduleName = this.moduleName;

    if(this.type === "controller"){
        Observable.listeneres.forEach(function (listener) {
            if(listener.events[eventName]){
                listener.events[eventName].apply(listener, args)
            }
        });
    }else{
        Observable.listeneres.forEach(function (listener) {
            if(listener.events[eventName] && listener.moduleName === moduleName){
                listener.events[eventName].apply(listener, args)
            }
        });
    }

};