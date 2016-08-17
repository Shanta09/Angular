var app=angular.module("myApp", [])
  .controller("myCtrl", function ($scope)
  {
    $scope.welcome = "This is created by templateURL.";
  })
  // 1. Directive with a template specified inline
  .directive("firstDir", function ()
  {
    return {
      
      template: '<p>This is created by template</p>'
    };
  })
  // 2. Directive with a template loaded from a URL, transclude and replace
  .directive("secondDir", function ()
  {
    return {
       templateUrl: 'g.html',
       transclude:true,
       replace:true
    };
  })
// 3.directive with link property.
  .directive('myCss', ['$document', function($document) {
  return {
    link: function(scope, element, attr) {

      element.css({
       position: 'relative',
       border: '1px solid red',
       backgroundColor: 'blue',
       cursor: 'pointer',
       color:'white'
      });
    }
  }
  }])
 /* .directive("thirdDir", function () {
    return {
      transclude:true,
      templateUrl: 'g.html'

    };
  });*/