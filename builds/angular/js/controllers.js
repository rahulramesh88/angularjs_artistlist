var myControllers = angular.module("myControllersActual", []);

myControllers.controller('SearchController',
    function MyController($scope, $http) {
        $scope.artistOrder = "name";
        $http.get('js/data.json').then(function (resp) {
            $scope.artists = resp.data;
        });
    } //function end
); //controller end

myControllers.controller('DetailsController',
    function MyController($scope, $http, $routeParams) {
        $http.get('js/data.json').then(function (resp) {
            $scope.artists = resp.data;

            $scope.whichItem = Number($routeParams.itemId);

            //prevItem and nextItem logic
            updatePrevNext($scope);
        });
    } //function end
); //controller end

function updatePrevNext($scope) {
    if ($scope.whichItem > 0) {
        $scope.prevItem = $scope.whichItem - 1;
    }
    else {
        $scope.prevItem = $scope.artists.length - 1;
    }
    if ($scope.whichItem < $scope.artists.length - 1) {
        //Ensure to convert to Number otherwise + can lead to string concat11
        $scope.nextItem = $scope.whichItem + 1;
    }
    else {
        $scope.nextItem = 0;
    }
}
