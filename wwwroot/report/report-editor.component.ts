require("./report-editor.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    templateUrl: "wwwroot/report/report-editor.component.html",
	styleUrls: ["wwwroot/report/report-editor.component.css"],
    selector: "report-editor",
    inputs: ['entity','addOrUpdate','remove','create'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportEditorComponent {}


