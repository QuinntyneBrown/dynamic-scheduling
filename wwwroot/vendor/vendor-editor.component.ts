require("./vendor-editor.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    templateUrl: "wwwroot/vendor/vendor-editor.component.html",
	styleUrls: ["wwwroot/vendor/vendor-editor.component.css"],
    selector: "vendor-editor",
    inputs: ['entity','addOrUpdate','remove','create'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class VendorEditorComponent {}


