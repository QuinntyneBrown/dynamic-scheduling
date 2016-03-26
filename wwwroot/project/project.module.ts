require("../core/core.module");

import { ProjectEditorComponent } from "./project-editor.component";
import { ProjectListComponent } from "./project-list.component";
import { ProjectComponent } from "./project.component";
import { ProjectsContainerComponent } from "./projects-container.component";
import { ProjectActionCreator } from "./project.actions";
import { ProjectService } from "./project.service";
import *  as reducers from "./project.reducers";

var app = (<any>angular.module("app.project", [
    "app.core"    
]));

app.service("projectActionCreator",["$location","dispatcher","projectService","guid",ProjectActionCreator]);
app.service("projectService",["$q","apiEndpoint","fetch",ProjectService]);
app.component(ProjectEditorComponent);
app.component(ProjectListComponent);
app.component(ProjectComponent);
app.component(ProjectsContainerComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
