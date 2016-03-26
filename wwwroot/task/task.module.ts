require("../core/core.module");

import { TaskEditorComponent } from "./task-editor.component";
import { TaskListComponent } from "./task-list.component";
import { TaskComponent } from "./task.component";
import { TasksContainerComponent } from "./tasks-container.component";
import { TaskActionCreator } from "./task.actions";
import { TaskService } from "./task.service";
import *  as reducers from "./task.reducers";

var app = (<any>angular.module("app.task", [
    "app.core"    
]));

app.service("taskActionCreator",["$location","dispatcher","taskService","guid",TaskActionCreator]);
app.service("taskService",["$q","apiEndpoint","fetch",TaskService]);
app.component(TaskEditorComponent);
app.component(TaskListComponent);
app.component(TaskComponent);
app.component(TasksContainerComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
