app.controller('MyPollsController', function($scope, $state, polls) {
  polls.getAll().success(function(data) {
    $scope.polls = data;
  });

  $scope.goToAnswer = function(poll) {
    $state.go('answer', {id: poll._id});
  };
});
