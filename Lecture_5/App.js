// immediately evoke function expression -> to no local variables that bleed in to the global variables
(
    function(){

        // protect us from doing mistakes
        // ex : when we declare a global variable it show as a error
        'use strict';

        // global scope object -> angular
        // module method ('name of app', dependencies foam in array)
        
        // This angular module bound to the our full html code
        angular.module('myFirstApp', [])


        // .controller function is the way that we define the viewModel of our view
        // controller method ('name of controller', function of the particular controller)
        // This myFirstController responsible for the elements in the div tag.
        .controller('myFirstController',function ($scope) {
        
        // Functional that provides by the angular to share data between vieModel and view(html)
        // ($scope)
        $scope.name = "Chathura";
        $scope.sayHello = function () {
            return "Hello Chathura";
        }
        

        // in html this values pass to the inside the vie model element as <div></div> {{name}} </div>

        } );
    }

)();