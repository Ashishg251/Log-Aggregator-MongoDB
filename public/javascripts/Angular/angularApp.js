(function(){
  var app=angular.module('app',['ngRoute']);
  app.config(['$routeProvider', function($routeProvider) {

    $routeProvider.
    when('/', {
      templateUrl: 'main.htm'
      // controller: 'AddStudentController'
    });

    // otherwise({
    //   redirectTo: '/addStudent'
    // });
  }]);
})();
