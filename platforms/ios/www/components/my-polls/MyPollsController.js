app.controller('MyPollsController', function($scope, $state) {
  $scope.polls = [
    'Poll 1',
    'Poll 2',
    'Poll 3',
    'Poll 4',
    'Poll 5',
    'Poll 6'
  ];

  $scope.goToAnswer = function(poll) {
    $state.go('answer');
  };
});
