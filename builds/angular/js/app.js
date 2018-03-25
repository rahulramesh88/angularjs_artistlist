var myApp = angular.module('myAppActualName', [
  "ngRoute",
  "myControllersActual"
]); //Added dependency to ngRoute module, and myControllersActual module

//Route Configuration for the App
myApp.config(["$routeProvider", function ($routeProvider) {
  $routeProvider
    .when("/list", {
      templateUrl: "js/partials/search.html",
      controller: "SearchController"
    })
    .when("/",{
      templateUrl: "js/partials/home.html"
    })
    .when("/details/:itemId",{
      templateUrl: "js/partials/details.html",
      controller: "DetailsController"
    })
    ;
}
]);

