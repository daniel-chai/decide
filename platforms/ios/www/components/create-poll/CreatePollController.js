app.controller('CreatePollController', function($scope, $state) {
  $scope.poll = {
    title: '',
    question: '',
    answers: [],
  };
  $scope.newAnswer = {
    value: ''
  };

  $scope.addAnswer = function() {
    $scope.poll.answers.push($scope.newAnswer.value);
    $scope.newAnswer.value = '';
  };

  $scope.removeAnswer = function(index) {
    $scope.poll.answers.splice(index, 1);
  };

  $scope.submit = function() {
    
  };
});
