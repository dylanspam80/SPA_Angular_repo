var LoginController = function ($scope, Api) {
    $scope.models = {
        CurrentUser: {
        }
    };
    function GetUser() {
        Api.GetApiCall("Login", "GetFirstUser", function (event) {
            $scope.models.CurrentUser = angular.fromJson(event.result);
        });
    }

}
function testClick() {
    $scope.GetUser();
    alert($scope.models.CurrentUser);
}


LoginController.$inject = ['$scope', 'Api'];