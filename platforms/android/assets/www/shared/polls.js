app.service('polls', function($http) {
  this.getAll = function() {
    return $http.get('http://localhost:3000/polls');
  };

  this.postOne = function(poll) {
    return $http.post('http://localhost:3000/polls', poll);
  };

  this.getOne = function(id) {
    return $http.get('http://localhost:3000/polls/' + id);
  };

  this.getImage = function(query) {
    return $http({
      method: 'GET',
      url: 'https://api.cognitive.microsoft.com/bing/v5.0/images/search?q=' + query + '&count=1&offset=0&mkt=en-us&safeSearch=Strict',
      headers: {
        'Ocp-Apim-Subscription-Key': '7b99c34e5ca64a8d87afbf1343206473'
      },
    });
  };
});
