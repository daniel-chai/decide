app.controller('AnswerController', function($scope, $state, $stateParams, polls) {
  $scope.answerIndex = 0;

  polls.getOne($stateParams.id).success(function(data) {
    $scope.poll = data;
    polls.getImage($scope.poll.options[$scope.answerIndex].name).success(function(data) {
      $scope.image = data.value[0].thumbnailUrl;
    });
  });

  $scope.voteYes = function() {
    $scope.poll.options[$scope.answerIndex].yes++;
    if ($scope.answerIndex + 1 >= $scope.poll.options.length) {
      polls.putOne($scope.poll._id, $scope.poll);
      $state.go('my-polls');
    }
    $scope.answerIndex++;
    polls.getImage($scope.poll.options[$scope.answerIndex].name).success(function(data) {
      $scope.image = data.value[0].thumbnailUrl;
    });

  };

  $scope.voteNo = function() {
    $scope.poll.options[$scope.answerIndex].no++;
    if ($scope.answerIndex + 1 >= $scope.poll.options.length) {
      polls.putOne($scope.poll._id, $scope.poll);
      $state.go('my-polls');
    }
    $scope.answerIndex++;
    polls.getImage($scope.poll.options[$scope.answerIndex].name).success(function(data) {
      $scope.image = data.value[0].thumbnailUrl;
    });
  };
});
