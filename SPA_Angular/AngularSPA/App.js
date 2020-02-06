var App = angular.module('App', ['ngRoute']);
App.service('Api', ['$http', ApiServices]);
App.controller('LoginController', LoginController);