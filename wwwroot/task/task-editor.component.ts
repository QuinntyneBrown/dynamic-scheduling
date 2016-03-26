require("./task-editor.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    templateUrl: "wwwroot/task/task-editor.component.html",
	styleUrls: ["wwwroot/task/task-editor.component.css"],
    selector: "task-editor",
    inputs: ['entity','addOrUpdate','remove','create'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskEditorComponent {}


