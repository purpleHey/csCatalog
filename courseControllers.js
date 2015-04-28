var courseControllers = angular.module('courseControllers', []);
// here we're using angular's dependency injection to pass the factory into our controller
//  it's getting the thing that is returned from the factory.
courseControllers.controller('courseListCtrl', function ($scope, courses){
  // the controller is calling the factory list function, and passing in a
  // callback.  
  courses.list(function(courses) {
    $scope.courses = courses;
  });
});

courseControllers.controller('courseDetailCtrl', function ($scope, $routeParams, courses){
  courses.find($routeParams.courseID, function(course) {
    $scope.course = course;
  });
});
