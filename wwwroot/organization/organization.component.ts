require("./organization.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import { OrganizationActionCreator } from "./organization.actions";

@Component({
    templateUrl: "wwwroot/organization/organization.component.html",
	styleUrls: ["wwwroot/organization/organization.component.css"],
    selector: "organization",
    providers: ["organizationActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrganizationComponent {
    constructor(private organizationActionCreator: OrganizationActionCreator) { }
  
}
