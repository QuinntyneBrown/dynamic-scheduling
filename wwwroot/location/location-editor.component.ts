require("./location-editor.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    templateUrl: "wwwroot/location/location-editor.component.html",
	styleUrls: ["wwwroot/location/location-editor.component.css"],
    selector: "location-editor",
    inputs: ['entity','addOrUpdate','remove','create'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class LocationEditorComponent {}


