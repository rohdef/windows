(function() {
  "use strict";

  angular.module("windowApp").config(["$routeProvider", function($routeProvider) {
    $routeProvider
      .when("/prices", {
        templateUrl: "templates/prices.html",
        controller: "PricesController",
        controllerAs: "pricesCtrl"
      })
      .otherwise({
        redirectTo: "/prices"
      });
  }]);
})();
