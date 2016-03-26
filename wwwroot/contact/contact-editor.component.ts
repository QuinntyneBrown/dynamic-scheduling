require("./contact-editor.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    templateUrl: "wwwroot/contact/contact-editor.component.html",
	styleUrls: ["wwwroot/contact/contact-editor.component.css"],
    selector: "contact-editor",
    inputs: ['entity','addOrUpdate','remove','create'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactEditorComponent {}


