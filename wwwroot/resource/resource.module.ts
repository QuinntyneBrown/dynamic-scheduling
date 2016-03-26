require("../core/core.module");

import { ResourceEditorComponent } from "./resource-editor.component";
import { ResourceListComponent } from "./resource-list.component";
import { ResourceComponent } from "./resource.component";
import { ResourcesContainerComponent } from "./resources-container.component";
import { ResourceActionCreator } from "./resource.actions";
import { ResourceService } from "./resource.service";
import *  as reducers from "./resource.reducers";

var app = (<any>angular.module("app.resource", [
    "app.core"    
]));

app.service("resourceActionCreator",["$location","dispatcher","resourceService","guid",ResourceActionCreator]);
app.service("resourceService",["$q","apiEndpoint","fetch",ResourceService]);
app.component(ResourceEditorComponent);
app.component(ResourceListComponent);
app.component(ResourceComponent);
app.component(ResourcesContainerComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
