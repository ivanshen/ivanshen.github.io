var app = angular.module('MainApp', ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html'
    })
        .when('/projects', {
            templateUrl: 'views/projects.html',
            controller: 'ProjectController'
    })
        .when('/blog', {
            templateUrl: 'views/blog.html',
            controller: 'BlogController'
    })
        .otherwise({
            redirectTo: '/'
    });
});

app.controller('ProjectController', function ($scope){
    $scope.project = {
        SpotiKeys: {
            "title": "SpotiKeys",
            "description": "Bind your own custom global hotkeys to control Spotify.",
            "link": "https://github.com/ivanshen/SpotiKeys/releases"
        },
        BabyBuddy: {
            "title": "BabyBuddy",
            "description": 'An educational resource for pregnant women.',
            "link": 'http://ivanshen.github.io/babybuddy'
        },
        SwapWithMe: {
            "title": 'SwapWithMe',
            "description": 'A platform for students to sell or swap their textbooks with other students.',
            link: 'https://github.com/paulxuca/Item-Swap'
        },
        HelpMeUp: {
            "title": 'Help Me Up',
            "description": "A patient monitoring Android app that uses a neural net to alert caregivers of a patient's fall and circumstances.",
            "link": "http://devpost.com/software/helpmeup"
        },
        WhoAreYouReally: {
            "title": "Who Are You Really?",
            "description":"A learning styles quiz that breaks down a user’s best learning styles in percentages.",
            "link": "https://github.com/ivanshen/Who-Are-You-Really"
        },
        Se7en: {
            "title":"Se7en",
            "description":"A fun and addicting web game to test your arithmetic speed!",
            "link":"http://ivanshen.github.io/Se7en/"
        }
    };
});
app.controller('BlogController', function($scope, $http){
    $scope.showContent = false;
   $http.get("https://api.mongolab.com/api/1/databases/blog/collections/posts?apiKey=1JGFkEE1S4UmGb79ypO0VXoSzJtGmUj3").success(function(data) {
       $scope.getResult = data
    });
    $scope.toggleContent = function(data){
        console.log(data);
        $scope.title = data.blog.title;
        $scope.content = data.blog.content;
        $scope.showContent = true;
    }
});

app.directive('copyRight', function (){
    return{
        restrict: 'E',
        templateUrl: 'views/copyright.html'
    }
});
    
