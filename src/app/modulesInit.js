(function() {
  "use strict";
  
  angular.module("windowApp", ["ngRoute", "ui.bootstrap", "windowControllers"]); 
  angular.module("windowControllers", ["ngRoute", "windowFactories"]);
  angular.module("windowFactories", ["ngResource"]);
})();
