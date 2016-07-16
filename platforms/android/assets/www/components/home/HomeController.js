app.controller('HomeController', function($scope, $state) {
  $scope.goToCreatePoll = function() {
    $state.go('create-poll');
  };

  $scope.goToMyPolls = function() {
    $state.go('my-polls');
  };
});
