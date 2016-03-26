require("./alert-editor.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    templateUrl: "wwwroot/alert/alert-editor.component.html",
	styleUrls: ["wwwroot/alert/alert-editor.component.css"],
    selector: "alert-editor",
    inputs: ['entity','addOrUpdate','remove','create'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertEditorComponent {}


