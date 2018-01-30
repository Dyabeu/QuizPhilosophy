// Immediately-Invoked Function Expression
(function(){
// Angular module created
  //angular
    var app = angular.module("philosophySentence", [])

    app.directive("scroll", function ($window) {
        var checkWidthHeight;

        return function(scope, element, attrs) {
                angular.element($window).bind("scroll", function() {

                console.log("dziala 600");
                  if(window.innerWidth <= 800 ){
                    checkWidthHeight = true;
                  } else {
                    checkWidthHeight = false;
                  }
                  
                  if (this.pageYOffset >= 400 && checkWidthHeight == true) {
                      scope.boolChangeClass = true;
                  } else if (this.pageYOffset >= 700 && checkWidthHeight == false) {
                      scope.boolChangeClass = true;
                  } else {
                      scope.boolChangeClass = false;
                  }
                scope.$apply();
            });
        };
    });

})();
