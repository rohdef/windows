(function() {
  "use strict";
  
  var PricesController = function($log, PricesService) {
    var vm = this;

    PricesService.prices()
      .then(function(data) {
        vm.prices = data.data;
      }, function(data) {
        $log.error(data);
      });
  };
  
  angular.module("windowControllers").controller("PricesController", ["$log", "PricesService", PricesController]);
})();
