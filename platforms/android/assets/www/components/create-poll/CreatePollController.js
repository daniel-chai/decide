app.controller('CreatePollController', function($scope, $state, polls) {
  $scope.poll = {
    name: '',
    question: '',
    options: [],
  };
  $scope.newOption = {
    value: ''
  };

  $scope.addOption = function() {
    $scope.poll.options.push($scope.newOption.value);
    $scope.newOption.value = '';
  };

  $scope.removeOption = function(index) {
    $scope.poll.options.splice(index, 1);
  };

  $scope.submit = function() {
    polls.postOne($scope.poll);
    $state.go('home');
  };
});
