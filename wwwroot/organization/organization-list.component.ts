require("./organization-list.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    templateUrl: "wwwroot/organization/organization-list.component.html",
	styleUrls: ["wwwroot/organization/organization-list.component.css"],
    selector: "organization-list",
    inputs: ['entities','edit','remove'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrganizationListComponent {
    constructor() { }     
}
