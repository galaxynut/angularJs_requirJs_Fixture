"use strict";

require.config({
        "baseUrl": "./",
        "waitSeconds": 0,
        "paths": {
            "can": "lib/can",
            "angular": "lib/angular",
            "jquery": "lib/jquery",
            "fixtures": "fixtures"
        },
        "priority": [
            "angular"
        ]
    }
);
require(["./app/module", "jquery"], function(module, $){
    angular.bootstrap($("html"), [module.name]);
});
