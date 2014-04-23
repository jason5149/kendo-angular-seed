define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('AppCtrl1', ['$scope',function ($scope) {

    	// ... do stuff with $scope
    	$scope.alerts = [
    		{ class: 'alert alert-dismissable alert-danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
    		{ class: 'alert alert-dismissable alert-success', msg: 'Well done! You successfully read this important alert message.' }
  		];

  		$scope.closeAlert = function(index) {
    		$scope.alerts.splice(index, 1);
  		};
    }]);
});
