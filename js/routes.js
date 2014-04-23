define(['./app'], function(app) {
    'use strict';
    return app.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider.state('view1', {
            url:            '/view1',
            templateUrl:    'partials/view1.html',
            controller:     'AppCtrl1'
        })
        .state('view2', {
            url:            '/view2',
            templateUrl:    'partials/view2.html',
            controller:     'AppCtrl2'
        })
        .state('view3', {
            url:            '/view3',
            templateUrl:    'partials/view3.html',
            controller:     'AppCtrl3'
        })
        .state('view4', {
            url:            '/view4',
            templateUrl:    'partials/view4.html',
            controller:     'AppCtrl4'
        })
        .state('view5', {
            url:            '/view5',
            templateUrl:    'partials/view5.html',
            controller:     'AppCtrl5'
        });

        $urlRouterProvider.otherwise('/view1');
    })
});