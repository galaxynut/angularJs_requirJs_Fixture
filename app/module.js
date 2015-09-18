define(["app/controller",
    "app/directive"],function(ctrl){
    "use strict";

    var mainModule = angular.module("myApp", ["myDirective"]);
    mainModule.controller("ctrl", ctrl);

    return mainModule;
});
