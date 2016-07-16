app.controller('ResultController', function($scope, $state, polls, $stateParams) {
  polls.getOne($stateParams.id).success(function(data) {
    $scope.poll = data;
    console.log($scope.poll);
  });
});
