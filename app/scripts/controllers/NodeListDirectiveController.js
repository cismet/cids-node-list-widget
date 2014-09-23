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
            /*
             * Using the object key to compare nodes is a workaround of the limitation that the 
             * entity based node api currently does not correctly determine the key of node. 
             * Comparing nodes on the object key here means in the worst case that multiple 
             * Nodes are shown as selected.
             * This needs to be changed as soon as the limitation of the entity based nodes api is solved
             */
            $scope.isActive = function (index) {
                if ($scope.selectedWorldstate && $scope.scenarioNodes[index].objectKey === $scope.selectedWorldstate.objectKey) {
                    return 'active';
                }
                return '';
            };
        }
    ]
);