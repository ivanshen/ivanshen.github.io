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
            templateUrl: 'views/blog.html'
    })
        .otherwise({
            redirectTo: '/'
    });
});

app.controller('ProjectController', function ($scope){
    $scope.project = {
        BabyBuddy: {
            "title": "BabyBuddy",
            "description": 'An educational resource for pregnant women.',
            "link": 'http://ivanshen.me/babybuddy'
        },
        SwapWithMe: {
            "title": 'SwapWithMe',
            "description": 'A platform for students to sell or swap their textbooks with other students.',
            link: 'http://swapwithme.meteor.com'
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
        }
    };
});
    
