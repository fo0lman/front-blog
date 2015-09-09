"use strict";

var DemoCtrl = angular.module('front-blog-app', []);

DemoCtrl.controller('PhoneListCtrl', function ($scope, $http) {
    $scope.title = 'Phone List:';

    $http.get('phones/phones.json').success(function (data, status, headers, config) {
        console.log(data);
        console.log(status);
        console.log(headers);
        console.log(config);
    });

    $scope.doneAndFilter = function (item) {
      return item.name && item.priority > 1 && item.status === true;
    };

    $scope.sortField = undefined;
    $scope.reverse = false;
    $scope.sort = function(fieldName) {
      if ($scope.sortField === fieldName) {
          $scope.reverse = !$scope.reverse;
      } else {
          $scope.sortField = fieldName;
          $scope.reverse = false;
      }
    };

    $scope.isSortUp = function (fieldName) {
      return $scope.sortField === fieldName && !$scope.reverse;
    };

    $scope.isSortDown = function (fieldName) {
        return $scope.sortField === fieldName && $scope.reverse;
    };


    //filter
    var today = new Date();

    $scope.now = today;

});

