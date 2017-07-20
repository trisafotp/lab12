var app = angular.module('toDo');

app.controller('toDoCtrl', function($scope){
  $scope.toDoList = [];
  $scope.addToList = function(task){
    $scope.toDoList.push(task);
  }
})
