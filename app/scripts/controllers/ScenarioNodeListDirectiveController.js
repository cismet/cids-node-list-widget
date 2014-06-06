angular.module(
    'de.cismet.crisma.widgets.scenarioNodeListWidget.controllers',
    []
).controller(
    'de.cismet.crisma.widgets.scenarioNodeListWidget.controllers.ScenarioNodeListDirectiveController',
    [
        '$scope',
        'de.cismet.collidingNameService.Nodes',
        function ($scope, Nodes) {
            'use strict';

            Nodes.scenarios(function (data) {
                $scope.scenarioNodes = data;
            });
            $scope.activateItem = function (index) {
                $scope.selectedIndex = index;
                $scope.selectedWorldstate = $scope.scenarioNodes[index];
            };
            $scope.isActive = function (index) {
                if ($scope.scenarioNodes[index] === $scope.selectedWorldstate) {
                    return 'active';
                }
                return '';
            };
        }
    ]
);