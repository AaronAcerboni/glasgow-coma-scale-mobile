var pead  = false,
    chosen = {
      eyes: {},
      verbal: {},
      motor: {}
    };

angular.module('gcs', ['ionic'])

.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'home.html',
      controller: 'mainCtrl'
    })
    .state('outcome', {
      url: '/outcome',
      templateUrl: 'outcome.html',
      controller: 'outcomeCtrl'
    })

    .state('eyes4', {
      url: '/eyes4',
      templateUrl: 'eyes4.html',
      controller: 'assessmentCtrl'
    })
    .state('eyes3', {
      url: '/eyes3',
      templateUrl: 'eyes3.html',
      controller: 'assessmentCtrl'
    })
    .state('eyes2', {
      url: '/eyes2',
      templateUrl: 'eyes2.html',
      controller: 'assessmentCtrl'
    })
    .state('eyes1', {
      url: '/eyes1',
      templateUrl: 'eyes1.html',
      controller: 'assessmentCtrl'
    })
    .state('peadeyes4', {
      url: '/peadeyes4',
      templateUrl: 'eyes4.html',
      controller: 'assessmentCtrl'
    })
    .state('peadeyes3', {
      url: '/peadeyes3',
      templateUrl: 'eyes3.html',
      controller: 'assessmentCtrl'
    })
    .state('peadeyes2', {
      url: '/peadeyes2',
      templateUrl: 'eyes2.html',
      controller: 'assessmentCtrl'
    })
    .state('peadeyes1', {
      url: '/peadeyes1',
      templateUrl: 'eyes1.html',
      controller: 'assessmentCtrl'
    })
    .state('verbal5', {
      url: '/verbal5',
      templateUrl: 'verbal5.html',
      controller: 'assessmentCtrl'
    })
    .state('verbal4', {
      url: '/verbal4',
      templateUrl: 'verbal4.html',
      controller: 'assessmentCtrl'
    })
    .state('verbal3', {
      url: '/verbal3',
      templateUrl: 'verbal3.html',
      controller: 'assessmentCtrl'
    })
    .state('verbal2', {
      url: '/verbal2',
      templateUrl: 'verbal2.html',
      controller: 'assessmentCtrl'
    })
    .state('verbal1', {
      url: '/verbal1',
      templateUrl: 'verbal1.html',
      controller: 'assessmentCtrl'
    })
    .state('peadverbal5', {
      url: '/peadverbal5',
      templateUrl: 'peadverbal5.html',
      controller: 'assessmentCtrl'
    })
    .state('peadverbal4', {
      url: '/peadverbal4',
      templateUrl: 'peadverbal4.html',
      controller: 'assessmentCtrl'
    })
    .state('peadverbal3', {
      url: '/peadverbal3',
      templateUrl: 'peadverbal3.html',
      controller: 'assessmentCtrl'
    })
    .state('peadverbal2', {
      url: '/peadverbal2',
      templateUrl: 'peadverbal2.html',
      controller: 'assessmentCtrl'
    })
    .state('peadverbal1', {
      url: '/peadverbal1',
      templateUrl: 'peadverbal1.html',
      controller: 'assessmentCtrl'
    })
    .state('peadmotor6', {
      url: '/peadmotor6',
      templateUrl: 'peadmotor6.html',
      controller: 'assessmentCtrl'
    })
    .state('peadmotor5', {
      url: '/peadmotor5',
      templateUrl: 'peadmotor5.html',
      controller: 'assessmentCtrl'
    })
    .state('peadmotor4', {
      url: '/peadmotor4',
      templateUrl: 'motor4.html',
      controller: 'assessmentCtrl'
    })
    .state('peadmotor3', {
      url: '/peadmotor3',
      templateUrl: 'motor3.html',
      controller: 'assessmentCtrl'
    })
    .state('peadmotor2', {
      url: '/peadmotor2',
      templateUrl: 'motor2.html',
      controller: 'assessmentCtrl'
    })
    .state('peadmotor1', {
      url: '/peadmotor1',
      templateUrl: 'motor1.html',
      controller: 'assessmentCtrl'
    })
    .state('motor6', {
      url: '/motor6',
      templateUrl: 'motor6.html',
      controller: 'assessmentCtrl'
    })
    .state('motor5', {
      url: '/motor5',
      templateUrl: 'motor5.html',
      controller: 'assessmentCtrl'
    })
    .state('motor4', {
      url: '/motor4',
      templateUrl: 'motor4.html',
      controller: 'assessmentCtrl'
    })
    .state('motor3', {
      url: '/motor3',
      templateUrl: 'motor3.html',
      controller: 'assessmentCtrl'
    })
    .state('motor2', {
      url: '/motor2',
      templateUrl: 'motor2.html',
      controller: 'assessmentCtrl'
    })
    .state('motor1', {
      url: '/motor1',
      templateUrl: 'motor1.html',
      controller: 'assessmentCtrl'
    })

  $urlRouterProvider.otherwise('/home');
})

.controller('mainCtrl', function($scope, $state, $ionicPlatform, $ionicPopup) {
  // Hide cancel assessment button
  document.getElementById('refresh-button').style.display = 'none'

  // Do not allow for user to "go back" to outcome page from home
  // This is done by hijacking/overwriting its behaviour
  $ionicPlatform.registerBackButtonAction(function () {
    var popup = $ionicPopup.confirm({
      title: 'Exit app',
      template: 'Are you sure you want to exit the app?'
    });

    popup.then(function (confirmed) {
      if (confirmed) {
        navigator.app.exit();
      }
    })
  }, 100);

  $scope.startAdult = function () {
    pead = false;
    $state.go('eyes4');
  }

  $scope.startPead = function () {
    pead = true;
    $state.go('eyes4');
  }

  $scope.restartApp = function () {
    var popup = $ionicPopup.confirm({
      title: 'Cancel assessment',
      template: 'Are you sure you want to cancel the assessment?'
    })

    popup.then(function (confirmed) {
      if (confirmed) {
        $state.go('home');
      }
    })
  }
})

.controller('assessmentCtrl', function($scope, $state) {
  // show cancel assessment button
  document.getElementById('refresh-button').style.display = 'block'
  
  $scope.next = function (templateName, points) {
    var data   = document.querySelectorAll('#answer')[0],
        type   = data.className,
        answer = data.innerHTML;

    if (points) {
      chosen[type].score = points;
      chosen[type].answer = answer;
    }

    if (pead && templateName != 'outcome') {
      templateName = 'pead' + templateName;
    }

    $state.go(templateName);
  }
})

.controller('outcomeCtrl', function($scope, $state, $ionicPopup) {
  // show cancel assessment button
  document.getElementById('refresh-button').style.display = 'block'
  var score = chosen.eyes.score + chosen.verbal.score + chosen.motor.score;
  // If we have arrived at this page for whatever reason without a full score
  // bring individual back to start

  if (!score) {
    $state.go('home');
  }

  $scope.gcs = score;

  if ($scope.gcs < 8) {
    $scope.interpretation = 'Possibly severe brain injury.'
  }
  else if ($scope.gcs < 13) {
    $scope.interpretation = 'Possibly moderate brain injury.'
  }
  else {
    $scope.interpretation = 'Possibly minor brain injury.'
  }

  $scope.chosen = chosen;

  $scope.backToMain = function () {
    var popup = $ionicPopup.confirm({
      title: 'Return to main screen ',
      template: 'Are you sure you want to return to the main screen?'
    })

    popup.then(function (confirmed) {
      if (confirmed) {
        $state.go('home');
      }
    })
  }
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
