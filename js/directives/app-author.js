define(['./module'], function (directives) {
    'use strict';
    directives.directive('appAuthor', ['author', function (author) {
        return function (scope, elm) {
            elm.text(author);
        };
    }]);
});
