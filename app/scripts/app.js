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
    'de.cismet.cids.widgets.nodeListWidget',
    [
        'de.cismet.cids.widgets.nodeListWidget.directives',
        'de.cismet.cids.widgets.nodeListWidget.controllers',
        'de.cismet.cids.rest.collidngNames.Nodes'
    ]
);