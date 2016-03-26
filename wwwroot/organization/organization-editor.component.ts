require("./organization-editor.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    templateUrl: "wwwroot/organization/organization-editor.component.html",
	styleUrls: ["wwwroot/organization/organization-editor.component.css"],
    selector: "organization-editor",
    inputs: ['entity','addOrUpdate','remove','create'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrganizationEditorComponent {}


