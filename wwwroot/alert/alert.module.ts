require("../core/core.module");

import { AlertEditorComponent } from "./alert-editor.component";
import { AlertListComponent } from "./alert-list.component";
import { AlertComponent } from "./alert.component";
import { AlertsContainerComponent } from "./alerts-container.component";
import { AlertActionCreator } from "./alert.actions";
import { AlertService } from "./alert.service";
import *  as reducers from "./alert.reducers";

var app = (<any>angular.module("app.alert", [
    "app.core"    
]));

app.service("alertActionCreator",["$location","dispatcher","alertService","guid",AlertActionCreator]);
app.service("alertService",["$q","apiEndpoint","fetch",AlertService]);
app.component(AlertEditorComponent);
app.component(AlertListComponent);
app.component(AlertComponent);
app.component(AlertsContainerComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
