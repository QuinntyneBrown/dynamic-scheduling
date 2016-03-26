require("./project-list.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    templateUrl: "wwwroot/project/project-list.component.html",
	styleUrls: ["wwwroot/project/project-list.component.css"],
    selector: "project-list",
    inputs: ['entities','edit','remove'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectListComponent {
    constructor() { }     
}
