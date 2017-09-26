var eventHandler = {
  events: {},
  addListener: function (eventName, callback) {
    if(!this.events[eventName]){
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
  },
  fireEvent: function () {
    var eventName = arguments[0],
        args = arguments.length > 1 ? Array.prototype.slice.call(arguments, 1) : [],
        eventArr = this.events[eventName],
        i;

    if(!eventArr){
      console.log('no subscribers');
    } else {
      for( i = 0; i < eventArr.length; i++){
        eventArr[i].apply(null, args);
      }
    }
  }
};