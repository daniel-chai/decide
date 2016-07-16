app.controller('AnswerController', function($scope, $state) {
  $scope.poll = {
    question: 'What pizza should we get?',
    answers: ['Pepperoni', 'Veggie', 'Cheese']
  };

  $scope.answerIndex = 0;

  $scope.voteYes = function() {
    if ($scope.answerIndex + 1 >= $scope.poll.answers.length) {
      $state.go('my-polls');
    }
    $scope.answerIndex++;
  };

  $scope.voteNo = function() {
    if ($scope.answerIndex + 1 >= $scope.poll.answers.length) {
      $state.go('my-polls');
    }
    $scope.answerIndex++;
  };
});
