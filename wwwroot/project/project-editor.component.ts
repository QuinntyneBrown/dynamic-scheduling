require("./project-editor.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    templateUrl: "wwwroot/project/project-editor.component.html",
	styleUrls: ["wwwroot/project/project-editor.component.css"],
    selector: "project-editor",
    inputs: ['entity','addOrUpdate','remove','create'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectEditorComponent {}


