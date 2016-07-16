var app = angular.module('app', ['ionic', 'ui.router', 'ionic.contrib.ui.tinderCards'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'components/home/home.html',
      controller: 'HomeController'
    })

    .state('my-polls', {
      url: '/my-polls',
      templateUrl: 'components/my-polls/my-polls.html',
      controller: 'MyPollsController'
    })

    .state('create-poll', {
      url: '/create-poll',
      templateUrl: 'components/create-poll/create-poll.html',
      controller: 'CreatePollController'
    })

    .state('answer', {
      url: '/answer/:id',
      templateUrl: 'components/answer/answer.html',
      controller: 'AnswerController'
    })

    .state('result', {
      url: '/result/:id',
      templateUrl: 'components/result/result.html',
      controller: 'ResultController'
    });
});
