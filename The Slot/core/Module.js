function Module() {

}

Module.prototype.getDefaultMVCClasses = function () {
    return {
        model: Model,
        view: View,
        controller: Controller
    }
};

/*var modName = "Module";

new window[nodName]();

var modulesToLoad = ["ButtonModule", "TextFieldModule"];



var test  = new Module();
console.error(test);*/
