(function() {
  "use strict";

  var PricesService = function($http) {
    return {
      prices: function() {
        return $http.get("./data/prices.json");
      }
    };
  };
  
  angular.module("windowFactories")
    .factory("PricesService", ["$http", PricesService]);
})();
