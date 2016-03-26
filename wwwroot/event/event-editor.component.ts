require("./event-editor.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    templateUrl: "wwwroot/event/event-editor.component.html",
	styleUrls: ["wwwroot/event/event-editor.component.css"],
    selector: "event-editor",
    inputs: ['entity','addOrUpdate','remove','create'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventEditorComponent {}


