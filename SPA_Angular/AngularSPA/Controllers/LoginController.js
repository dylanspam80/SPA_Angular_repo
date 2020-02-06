var LoginController = function ($scope) {
    $scope.models = {
        CurrentUser: {
            Username: "",
            Password: ""
        }
    };
}

function GetUser() {
    Api.Get("Locations", "GetLocations", function (event) {
        $scope.models.CurrentUser = event.result;
    });
}

LoginController.$inject = ['$scope'];