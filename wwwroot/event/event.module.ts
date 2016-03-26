require("../core/core.module");

import { EventEditorComponent } from "./event-editor.component";
import { EventListComponent } from "./event-list.component";
import { EventComponent } from "./event.component";
import { EventsContainerComponent } from "./events-container.component";
import { EventActionCreator } from "./event.actions";
import { EventService } from "./event.service";
import *  as reducers from "./event.reducers";

var app = (<any>angular.module("app.event", [
    "app.core"    
]));

app.service("eventActionCreator",["$location","dispatcher","eventService","guid",EventActionCreator]);
app.service("eventService",["$q","apiEndpoint","fetch",EventService]);
app.component(EventEditorComponent);
app.component(EventListComponent);
app.component(EventComponent);
app.component(EventsContainerComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
