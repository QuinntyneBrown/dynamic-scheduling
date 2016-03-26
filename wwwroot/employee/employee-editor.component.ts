require("./employee-editor.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    templateUrl: "wwwroot/employee/employee-editor.component.html",
	styleUrls: ["wwwroot/employee/employee-editor.component.css"],
    selector: "employee-editor",
    inputs: ['entity','addOrUpdate','remove','create'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeEditorComponent {}


