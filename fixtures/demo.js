define(["can/fixture"], function(fixture){
    fixture({
        "GET /demo/test": function (original, response) {
            response(200, "success", {info: "hello world!"}, {});
        }
    });

    return fixture;
})
