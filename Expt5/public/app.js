var app = angular.module('todoApp', []);

app.controller('TodoController', function($scope, $http) {
    $scope.tasks = [];

    // Load tasks on start
    $http.get('/tasks').then(function(response) {
        $scope.tasks = response.data;
    });

    $scope.addTask = function() {
        if ($scope.newTask) {
            $scope.tasks.push($scope.newTask);
            saveTasks();
            $scope.newTask = '';
        }
    };

    $scope.removeTask = function(index) {
        $scope.tasks.splice(index, 1);
        saveTasks();
    };

    function saveTasks() {
        $http.post('/tasks', $scope.tasks);
    }

    $scope.exportToExcel = function() {
        alert('Excel export simulated (you can add SheetJS or similar libraries).');
    };
});
