require("../core/core.module");

import { EventTypeEditorComponent } from "./event-type-editor.component";
import { EventTypeListComponent } from "./event-type-list.component";
import { EventTypeComponent } from "./event-type.component";
import { EventTypesContainerComponent } from "./event-types-container.component";
import { EventTypeActionCreator } from "./event-type.actions";
import { EventTypeService } from "./event-type.service";
import *  as reducers from "./event-type.reducers";

var app = (<any>angular.module("app.eventType", [
    "app.core"    
]));

app.service("eventTypeActionCreator",["$location","dispatcher","eventTypeService","guid",EventTypeActionCreator]);
app.service("eventTypeService",["$q","apiEndpoint","fetch",EventTypeService]);
app.component(EventTypeEditorComponent);
app.component(EventTypeListComponent);
app.component(EventTypeComponent);
app.component(EventTypesContainerComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
