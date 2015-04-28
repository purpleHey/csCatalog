var courseApp = angular.module('courseApp', ['ngRoute', 'courseControllers']);

courseApp.config(function($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'csCourse-list.html',
      controller: 'courseListCtrl'
    }).
    when('/:courseID', {
      templateUrl: 'csCourse-details.html',
      controller: 'courseDetailCtrl'
    }).
    otherwise({
      redirectTo: '/'
    });
});

// an Angular factory lets you create a service that you can use with angular's dependency injection.
// It's the way to expose data to views in an angular app.

// the first argument is the name of the service, followed by the implementation of the
// service.  The fnction returns an object with a function on it called list, and one called
// find.  The function takes a callback, and that callback will be called when the data is
// loaded.
courseApp.factory('courses', function($http){

  // Return an object that has a function on it called list and find.
  return {
    list: function(callback) {
      $http({
        method: 'GET',
        url: 'courses.json',
        cache: true
      }).success(callback);
    },
    find: function(id, callback) {
      $http({
        method: 'GET',
        url: 'sessionOffering_' + id + '.json'
      }).success(callback).error(function(response) {
      	console.log('Reponse', response);
      });
    }
  };
});