(
    function () {
        'use strict';
        angular.module('nameCalculator', [])
            .controller('nameCalculatorController', function ($scope) {
                $scope.name = "";
                $scope.totalValue = 0;

                $scope.displayNumeric = function () {

                    var tValue = CalculateNumericForString($scope.name);
                    $scope.totalValue = tValue;
                };

                function CalculateNumericForString(string) {
                    var totalValueOfString = 0;

                    for (var i = 0; i < string.length; i++) {
                        totalValueOfString += string.charCodeAt(i);
                    }

                    return totalValueOfString;
                }
            });

    }
)();