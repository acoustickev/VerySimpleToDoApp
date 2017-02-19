// Define the top-level app container

myApp = angular.module('myApp', []);

myApp.controller('MainController', ['$scope', function($scope) {

    //Sort sets the default sort type and the default sort order
    $scope.sortType = 'toDo';
    $scope.sortReverse = false;

    // Creates an empty array
    $scope.tasks = [];
    $scope.add = function() {

        //Collect user input into an array and pushes data to a table
        $scope.tasks.push({
            toDo: $scope.task,
            priority: $scope.taskPriority
        });

    }

    //Styles text color 
    $scope.style1 = "blue";
    $scope.style2 = "red";
    $scope.style3 = "green";

}]);
