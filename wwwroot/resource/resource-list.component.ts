require("./resource-list.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    templateUrl: "wwwroot/resource/resource-list.component.html",
	styleUrls: ["wwwroot/resource/resource-list.component.css"],
    selector: "resource-list",
    inputs: ['entities','edit','remove'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResourceListComponent {
    constructor() { }     
}
