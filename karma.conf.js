"use strict";

module.exports = function(config) {
  config.set({
    basePath: "./",

    files: [
      "build/dist/bower_components/angular/angular.js",
      "build/dist/bower_components/angular-cookies/angular-cookies.js",
      "build/dist/bower_components/angular-resource/angular-resource.js",
      "build/dist/bower_components/angular-route/angular-route.js",
      "build/dist/bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js",
      "build/dist/bower_components/moment/min/moment-with-locales.min.js",
      "build/dist/bower_components/moment-timezone/builds/moment-timezone-with-data.min.js",
      "build/dist/bower_components/multiple-date-picker/dist/multipleDatePicker.min.js",
      "build/dist/bower_components/ng-file-upload/ng-file-upload.min.js",
      "build/dist/bower_components/raphael/raphael.min.js",
      "build/dist/bower_components/angular-mocks/angular-mocks.js",
      "build/dist/bower_components/js-libs/js-libs.min.js",
      "src/app/modulesInit.js",
      "src/app/**/*!(modulesInit).js",
      "tests/unit/**/*.js"
    ],

    autoWatch: true,

    frameworks: ["jasmine"],

    browsers: ["Chrome", "Firefox"],

    plugins: [
      "karma-chrome-launcher",
      "karma-firefox-launcher",
      "karma-jasmine"
    ]
  });
};
