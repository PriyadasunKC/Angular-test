(
    function () {
        'use strict';

        angular.module('dependencyDemo', [])
            // $scope , $filter are injectors
            // $filer function is allow us to create filtering functions 
            // use to formatting the data and eventually get displayed to the user.
            .controller('dependencyDemoController', dependencyDemoController);

        function dependencyDemoController($scope, $filter) {
            $scope.name = "Chathura";

            $scope.upper = function () {
                // This upper case in filter function is keyword for upper case letters
                var upCase = $filter('uppercase');
                $scope.name = upCase($scope.name);
            };
        }
    })
();