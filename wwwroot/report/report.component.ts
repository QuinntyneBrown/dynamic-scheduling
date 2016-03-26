require("./report.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import { ReportActionCreator } from "./report.actions";

@Component({
    templateUrl: "wwwroot/report/report.component.html",
	styleUrls: ["wwwroot/report/report.component.css"],
    selector: "report",
    providers: ["reportActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportComponent {
    constructor(private reportActionCreator: ReportActionCreator) { }
  
}
