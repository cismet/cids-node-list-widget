angular.module(
    'de.cismet.crisma.widgets.scenarioNodeListWidget.directives',
    []
).directive(
    'scenarioNodeListWidget',
    function () {
        'use strict';

        return {
            scope: {
                selectedWorldstate: '=?'
            },
            restrict: 'E',
            replace: true,
            templateUrl: 'templates/ScenarioListWidgetTemplate.html',
            controller: 'de.cismet.crisma.widgets.scenarioNodeListWidget.controllers.ScenarioNodeListDirectiveController'
        };
    }
);
