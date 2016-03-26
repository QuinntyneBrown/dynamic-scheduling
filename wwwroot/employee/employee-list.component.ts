require("./employee-list.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    templateUrl: "wwwroot/employee/employee-list.component.html",
	styleUrls: ["wwwroot/employee/employee-list.component.css"],
    selector: "employee-list",
    inputs: ['entities','edit','remove'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeListComponent {
    constructor() { }     
}
