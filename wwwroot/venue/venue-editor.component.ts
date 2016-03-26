require("./venue-editor.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    templateUrl: "wwwroot/venue/venue-editor.component.html",
	styleUrls: ["wwwroot/venue/venue-editor.component.css"],
    selector: "venue-editor",
    inputs: ['entity','addOrUpdate','remove','create'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class VenueEditorComponent {}


