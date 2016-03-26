require("./schedule-editor.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    templateUrl: "wwwroot/schedule/schedule-editor.component.html",
	styleUrls: ["wwwroot/schedule/schedule-editor.component.css"],
    selector: "schedule-editor",
    inputs: ['entity','addOrUpdate','remove','create'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScheduleEditorComponent {}


