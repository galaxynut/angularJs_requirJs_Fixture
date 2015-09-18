define([], function(){
    var myDirective = angular.module("myDirective", []);

    myDirective.directive("here", function(){
        return {
            template: "<div>Here is the here tags</div>",
            restrict: "E",
            replace: true
        }
    });

    myDirective.directive("hello", function(){
        return {
            link: function (scope, element, attr) {
                var a = attr["param1"] || null;
                var b = attr["param2"] || null;
                element.append(a + b);
            },
            restrict: "E"
        }
    });

    return myDirective;
});
