require("../core/core.module");

import { LocationEditorComponent } from "./location-editor.component";
import { LocationListComponent } from "./location-list.component";
import { LocationComponent } from "./location.component";
import { LocationsContainerComponent } from "./locations-container.component";
import { LocationActionCreator } from "./location.actions";
import { LocationService } from "./location.service";
import *  as reducers from "./location.reducers";

var app = (<any>angular.module("app.location", [
    "app.core"    
]));

app.service("locationActionCreator",["$location","dispatcher","locationService","guid",LocationActionCreator]);
app.service("locationService",["$q","apiEndpoint","fetch",LocationService]);
app.component(LocationEditorComponent);
app.component(LocationListComponent);
app.component(LocationComponent);
app.component(LocationsContainerComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
