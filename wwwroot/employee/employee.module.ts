require("../core/core.module");

import { EmployeeEditorComponent } from "./employee-editor.component";
import { EmployeeListComponent } from "./employee-list.component";
import { EmployeeComponent } from "./employee.component";
import { EmployeesContainerComponent } from "./employees-container.component";
import { EmployeeActionCreator } from "./employee.actions";
import { EmployeeService } from "./employee.service";
import *  as reducers from "./employee.reducers";

var app = (<any>angular.module("app.employee", [
    "app.core"    
]));

app.service("employeeActionCreator",["$location","dispatcher","employeeService","guid",EmployeeActionCreator]);
app.service("employeeService",["$q","apiEndpoint","fetch",EmployeeService]);
app.component(EmployeeEditorComponent);
app.component(EmployeeListComponent);
app.component(EmployeeComponent);
app.component(EmployeesContainerComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
