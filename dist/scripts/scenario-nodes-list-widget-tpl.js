angular.module('de.cismet.crisma.widgets.scenarioNodeListWidget.directives').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('templates/ScenarioListWidgetTemplate.html',
    "<ul>\n" +
    "    <li ng-repeat=\"node in scenarioNodes\" ng-class=\"isActive($index)\">\n" +
    "        <a ng-click=\"activateItem($index)\">\n" +
    "            <i ng-if=\"node.icon\" class=\"fa fa-lg fa-fw\" ng-class=\"node.icon\"></i>\n" +
    "            <span>{{node.name}}</span>\n" +
    "        </a>\n" +
    "    </li>\n" +
    "</ul>"
  );

}]);
