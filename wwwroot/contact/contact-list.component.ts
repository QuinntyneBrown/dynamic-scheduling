require("./contact-list.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    templateUrl: "wwwroot/contact/contact-list.component.html",
	styleUrls: ["wwwroot/contact/contact-list.component.css"],
    selector: "contact-list",
    inputs: ['entities','edit','remove'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactListComponent {
    constructor() { }     
}
