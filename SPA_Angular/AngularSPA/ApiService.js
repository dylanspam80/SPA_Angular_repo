var ApiService = function ($http) {
    var result;
    this.GetApiCall = function (controllerName, method, callback) {
        result = $http.get('/' + controllerName + '/' + method).success(
            function (data, status) {
                var event = {
                    result: data,
                    hasErrors: false
                };
                callback(event);
            }).error(
                function (data, status) {
                    var event = {
                        result: "",
                        hasErrors: true,
                        error: data
                    };
                    callback(event);
                }
            );
    }

    this.Post = function (controllerName, methodName, obj, callback) {
        result = $http.post('/' + controllerName + '/' + methodName, obj).success(function (data, status) {
            var event = {
                result: data,
                hasErrors: false
            };
            callback(event);
        }).error(function () {
            var event = {
                result: "",
                hasErrors: true,
                error: data
            };
            callback(event);
        });
        return result;
    };

}