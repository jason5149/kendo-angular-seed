define([
    "jquery", 
    "angular", 
    "angular-kendo-ui",
    'uiRouter',
    'ui-bootstrap',
    './controllers/index',
    './directives/index',
    './filters/index',
    './services/index'
], function($, angular){
    'use strict';
    
    var app = angular.module("app", [
        "kendo.directives",
        'ui.router',
        'ui.bootstrap',
        'app.services',
        'app.controllers',
        'app.filters',
        'app.directives'
    ]);

    app.run(function($rootScope, $state, $stateParams){
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    });

    return app;
});