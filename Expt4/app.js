angular.module('counterApp', [])
  .controller('CounterController', function($scope) {
    $scope.count = 0;

    $scope.increment = function() {
      $scope.count++;
    };

    $scope.decrement = function() {
      $scope.count--;
    };

    $scope.reset = function() {
      $scope.count = 0;
    };
  });
