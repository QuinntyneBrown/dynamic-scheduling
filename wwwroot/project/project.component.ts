require("./project.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import { ProjectActionCreator } from "./project.actions";

@Component({
    templateUrl: "wwwroot/project/project.component.html",
	styleUrls: ["wwwroot/project/project.component.css"],
    selector: "project",
    providers: ["projectActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectComponent {
    constructor(private projectActionCreator: ProjectActionCreator) { }
  
}
