var myControllers = angular.module("myControllersActual");

myControllers.filter('zipcode', function () {
    return function (input) {
        if (!input) {
            return input;
        }
        if (input.toString().length > 5) {
            return input.toString().slice(0, 5) + "-" + input.toString().slice(5);
        }
        else if (input.toString().length === 5) {
            return input.toString();
        }
        else {
            return input;
        }
    };
});