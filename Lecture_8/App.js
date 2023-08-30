//


// (
//     function () {
//         'use strict';

//         angular.module('minificationDemo', [])
//             .controller('minificationDemoController', ['$scope','$filter',minificationDemoController]);

//         function minificationDemoController($scope, $filter) {
//             $scope.name = "Chathura";

//             // Convert the letters in the text box to upper case when text box not focusing.
//             $scope.upper = function () {
//                 var upCase = $filter('uppercase');
//                 $scope.name = upCase($scope.name);
//             };
//         }
//     }
// )();

// minified version of 2nd code

angular.module("minificationDemo", []).controller("minificationDemoController", ["$scope", "$filter", function e(n, o) { n.name = "Chathura", n.upper = function () { var e = o("uppercase"); n.name = e(n.name) } }]);
