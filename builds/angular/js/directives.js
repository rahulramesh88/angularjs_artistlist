var myControllers = angular.module("myControllersActual");

myControllers.directive('tooltip', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            $(element).hover(function () {
                // on mouseenter
                $(element).tooltip('show');
            }, function () {
                // on mouseleave
                $(element).tooltip('hide');
            });
            $(element).click(function () {
                $(element).tooltip('hide');  
            });
        }
    };
});

myControllers.directive('zipcodevalidate', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            $(element).onblur(function () {
                if ($(element).value.toString().length < 5) {
                    return false;
                }
            });
        }
    };
});