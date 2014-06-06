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
angular.module(
    'de.cismet.crisma.widgets.scenarioNodeListWidget',
    [
        'de.cismet.crisma.widgets.scenarioNodeListWidget.directives',
        'de.cismet.crisma.widgets.scenarioNodeListWidget.controllers',
        'de.cismet.cids.rest.collidngNames.Nodes'
    ]
);