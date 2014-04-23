define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('NavCtrl', ['$scope',function ($scope) {
    	$scope.activeView = 'view1'

    	$scope.setActiveView = function(viewName) {
    		if (viewName) { $scope.activeView = viewName; }
    	};
    }]);
});