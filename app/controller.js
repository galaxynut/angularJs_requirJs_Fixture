define(["jquery",
    "fixtures/demo"], function($, demo){
    "use strict";
    var ctrl = function($scope){
        var settings = {
            "type": "GET",
            "contentType": "application/json; charset=UTF-8",
            "url": "/demo/test",
            "data": {},
            "beforeSend": function (request, setting) {
                // ajax send before
            },
            "complete": function (xhr, status) {
                // ajax complete
            }
        };

        $.ajax(settings).success(function(data){
            $scope.$apply(function(){
                $scope.info = data && data.info;
            });
        });
    };
    ctrl.$injector = ["$rootScope"];
    return ctrl;
});
