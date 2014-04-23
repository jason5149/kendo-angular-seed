require.config({
	
	paths: {
		'domReady': '../bower_components/requirejs-domready/domReady',
        'jquery': '../bower_components/jquery/jquery',
        'angular': '../bower_components/angular/angular',
        'kendo': '../lib/kendo.all.min',
        'uiRouter': '../bower_components/angular-ui-router/release/angular-ui-router',
        'ui-bootstrap': '../bower_components/angular-bootstrap/ui-bootstrap',
        'angular-kendo-ui': '../bower_components/angular-kendo-ui/angular-kendo'
	},

	shim: {
		'angular': {
            exports: 'angular'
        },
        'uiRouter': {
            deps: ['angular']
        },
        'ui-bootstrap': {
        	deps: ['angular']
        },
        'kendo': {
            deps: ['jquery']
        }
	},

    deps: ['./bootstrap']
});