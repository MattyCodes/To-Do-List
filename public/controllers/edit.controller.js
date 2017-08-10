var myApp = angular.module('myApp', []);
myApp.controller('EditCtrl', ['$scope', '$http', function($scope, $http) {

  $scope.editTodo = function(id) {
    console.log($scope.todo)
  }

}]);
