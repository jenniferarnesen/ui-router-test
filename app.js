'use strict';

var app = angular.module('assignmenttool', [
    'ui.router'
])
.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
    .state('assignment', {
        url: '/assignment',
        templateUrl: 'views/assignment.html',
        controller: 'AssignmentController'
    })
});
