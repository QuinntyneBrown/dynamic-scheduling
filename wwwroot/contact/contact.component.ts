require("./contact.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import { ContactActionCreator } from "./contact.actions";

@Component({
    templateUrl: "wwwroot/contact/contact.component.html",
	styleUrls: ["wwwroot/contact/contact.component.css"],
    selector: "contact",
    providers: ["contactActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {
    constructor(private contactActionCreator: ContactActionCreator) { }
  
}
