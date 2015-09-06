"use strict";

FrontBlog.config(['$routeProvider', '$locationProvider', 'usSpinnerConfigProvider', function ($routeProvide, $locationProvider, usSpinnerConfigProvider) {
    $routeProvide
        .when('/',{
            templateUrl: 'templates/home.html',
            controller: 'PostListCtrl'
        })
        .when('/about',{
            templateUrl: 'templates/about.html',
            controller: 'AboutCtrl'
        })
        .when('/contacts',{
            templateUrl: 'templates/contacts.html',
            controller: 'ContactsCtrl'
        })
        .when('/latestjobs',{
            templateUrl: 'templates/latest-jobs.html',
            controller: 'LatestJobsCtrl'
        })
        .when('/privacy-policy',{
            templateUrl: 'templates/privacy-policy.html',
            controller: 'PrivacyPolicyCtrl'
        })
        .when('/posts/view/:postId',{
            templateUrl: 'templates/post-detail.html',
            controller: 'PostDetailCtrl'
        })
        .when('/posts/edit/:postId',{
            templateUrl: 'templates/action-form.html',
            controller: 'ActionFormCtrl'
        })
        .when('/posts/add',{
            templateUrl: 'templates/action-form.html',
            controller: 'ActionFormCtrl'
        })
        .otherwise({
            redirectTo: '#/'
        });

    usSpinnerConfigProvider.setDefaults({
        lines: 7,
        length: 12,
        width: 4,
        radius: 8,
        corners: 1,
        rotate: 0,
        color: "#72c02c",
        speed: 1,
        trail: 45,
        className: "spinner",
        zIndex: 2e9,
        top: '50%',
        left: '50%',
        shadow: false,
        hwaccel: false,
        position: 'absolute'
    });

}]);