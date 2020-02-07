var App = angular.module('App', ['ngRoute']);
App.service('Api', ['$http', ApiService]);
App.controller('LoginController', LoginController);