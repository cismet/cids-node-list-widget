//angular.module('tpltest', []).run(['$templateCache', function($templateCache) {
//    $templateCache.put('partials/worldstateSelector.html', 
//'<div>'
//    + '<select id="worldstate-selection-widget" multiple="true" size="10" data-ng-model="selectedWorldstates" '
//             +'data-ng-options="ws.name for ws in worldstates" >'
//    +'</select>'
//+'</div>'
//)    
//}]);
// this only combines all the modules in a single one 
angular.module('de.cismet.crisma.widgets.scenarioNodeListWidget', [
  'de.cismet.crisma.widgets.scenarioNodeListWidget.directives',
  'de.cismet.crisma.widgets.scenarioNodeListWidget.controllers',
  'de.cismet.cids.rest.collidngNames.Nodes'
]);
angular.module('de.cismet.crisma.widgets.scenarioNodeListWidget.controllers', []).controller('de.cismet.crisma.widgets.scenarioNodeListWidget.controllers.ScenarioNodeListDirectiveController', [
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
]);
angular.module('de.cismet.crisma.widgets.scenarioNodeListWidget.directives', []).directive('scenarioNodeListWidget', function () {
  'use strict';
  return {
    scope: { selectedWorldstate: '=?' },
    restrict: 'E',
    replace: true,
    templateUrl: 'templates/ScenarioListWidgetTemplate.html',
    controller: 'de.cismet.crisma.widgets.scenarioNodeListWidget.controllers.ScenarioNodeListDirectiveController'
  };
});