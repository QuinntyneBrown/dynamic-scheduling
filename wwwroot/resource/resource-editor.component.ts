require("./resource-editor.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    templateUrl: "wwwroot/resource/resource-editor.component.html",
	styleUrls: ["wwwroot/resource/resource-editor.component.css"],
    selector: "resource-editor",
    inputs: ['entity','addOrUpdate','remove','create'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResourceEditorComponent {}


