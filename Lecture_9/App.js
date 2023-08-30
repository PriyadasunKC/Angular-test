(
    function () {
        'use strict';

        angular.module('ExpressionAndInterpolationDemo', [])
            .controller('ExpressionAndInterpolationDemoController', ExpressionAndInterpolationDemoController);

        ExpressionAndInterpolationDemoController.$inject = ['$scope'];
        function ExpressionAndInterpolationDemoController($scope) {
            $scope.name = "Chathura";
            $scope.StateOfNeed = "Dollars";
            $scope.buttonName = "Give Dollars"
            $scope.giveMessage = function () {
                return "I want to be a millionaire";
                
            }
            $scope.feedChathura = function () {
                $scope.StateOfNeed = "House";

            };
        }
    })
    ();