app.controller('HomeController', function($scope, $state) {
  $scope.goToCreatePoll = function() {
    $state.go('create-poll');
  };

  $scope.goToFindPoll = function() {
    $state.go('find-poll');
  };

  $scope.goToMyPolls = function() {
    $state.go('my-polls');
  };
});
