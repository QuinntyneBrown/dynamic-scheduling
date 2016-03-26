require("./employee.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import { EmployeeActionCreator } from "./employee.actions";

@Component({
    templateUrl: "wwwroot/employee/employee.component.html",
	styleUrls: ["wwwroot/employee/employee.component.css"],
    selector: "employee",
    providers: ["employeeActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeComponent {
    constructor(private employeeActionCreator: EmployeeActionCreator) { }
  
}
