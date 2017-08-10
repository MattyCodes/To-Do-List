var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {

  $http.get('/todoList').then(function(res) {
    $scope.todoList = res.data;
  });

  $scope.selectTodo = function(item) {
    $scope.todo = { _id: item._id, text: item.text };
  }

  $scope.deselectTodo = function() {
    $scope.todo = null;
  }

  $scope.addTodo = function() {
    $http.post('/todoList', $scope.todo).then(function(res) {
      $scope.todoList.push(res.data);
    });
  };

  $scope.editTodo = function(todo) {
    var i = $scope.todoList.indexOf(todo);
    $http.put('/todoList/' + todo._id, todo).then(function(res) {
      $scope.todoList.splice(i, 1, res.data);
    });
  };

  $scope.delete = function(id) {
    $http.delete('/todoList/' + id).then(function(res) {
      var i = $scope.todoList.indexOf(res.data);
      $scope.todoList.splice(i, 1);
    });
  };

}]);
