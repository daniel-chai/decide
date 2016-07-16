app.controller('FindPollController', function($scope, $state) {
  $scope.goToAnswer = function(poll) {
    $state.go('answer');
  };
});
