function Module() {

}

Module.prototype.getDefaultMVCClasses = function () {
    return {
        model: Model,
        view: View,
        controller: Controller
    }
};