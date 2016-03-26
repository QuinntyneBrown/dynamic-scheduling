require("./report-list.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    templateUrl: "wwwroot/report/report-list.component.html",
	styleUrls: ["wwwroot/report/report-list.component.css"],
    selector: "report-list",
    inputs: ['entities','edit','remove'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportListComponent {
    constructor() { }     
}
