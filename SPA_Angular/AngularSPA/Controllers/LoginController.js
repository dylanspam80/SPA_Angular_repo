var LoginController = function ($scope, Api) {
    $scope.models = {
        CurrentUser: {
        }
    };
    function GetEmptyUser() {
        Api.GetApiCall("Login", "GetEmptyUser", function (event) {
            $scope.models.CurrentUser = angular.fromJson(event.result);
        });
    }
    
    $scope.NavigateHome = function () {
        Api.Post("Login", "Login", $scope.models.CurrentUser, function (event) {
            if (event.result == true) {
                window.location.replace("/Home/Index");
            } else {
                alert('User Not Authenticated');
            }
        });
    };

    GetEmptyUser();

}

LoginController.$inject = ['$scope', 'Api'];