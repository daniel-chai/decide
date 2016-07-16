app.service('polls', function($http) {
  this.getAll = function() {
    return $http.get('http://localhost:3000/polls');
  };

  this.postOne = function(poll) {
    return $http.post('http://localhost:3000/polls', poll);
  };
});
