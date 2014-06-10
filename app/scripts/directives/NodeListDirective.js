angular.module(
    'de.cismet.cids.widgets.nodeListWidget.directives',
    []
).directive(
    'cidsNodeListWidget',
    function () {
        'use strict';

        return {
            scope: {
                selectedWorldstate: '=?'
            },
            restrict: 'E',
            replace: true,
            templateUrl: 'templates/NodeListWidgetTemplate.html',
            controller: 'de.cismet.cids.widgets.nodeListWidget.controllers.NodeListDirectiveController'
        };
    }
);
