angular.module(
    'de.cismet.cids.widgets.nodeListWidget.controllers',
    []
).controller(
    'de.cismet.cids.widgets.nodeListWidget.controllers.NodeListDirectiveController',
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