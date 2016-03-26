require("../core/core.module");

import { ScheduleEditorComponent } from "./schedule-editor.component";
import { ScheduleListComponent } from "./schedule-list.component";
import { ScheduleComponent } from "./schedule.component";
import { SchedulesContainerComponent } from "./schedules-container.component";
import { ScheduleActionCreator } from "./schedule.actions";
import { ScheduleService } from "./schedule.service";
import *  as reducers from "./schedule.reducers";

var app = (<any>angular.module("app.schedule", [
    "app.core"    
]));

app.service("scheduleActionCreator",["$location","dispatcher","scheduleService","guid",ScheduleActionCreator]);
app.service("scheduleService",["$q","apiEndpoint","fetch",ScheduleService]);
app.component(ScheduleEditorComponent);
app.component(ScheduleListComponent);
app.component(ScheduleComponent);
app.component(SchedulesContainerComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
