require("./event-type-editor.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    templateUrl: "wwwroot/event-type/event-type-editor.component.html",
	styleUrls: ["wwwroot/event-type/event-type-editor.component.css"],
    selector: "event-type-editor",
    inputs: ['entity','addOrUpdate','remove','create'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventTypeEditorComponent {}


