require("./resource.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import { ResourceActionCreator } from "./resource.actions";

@Component({
    templateUrl: "wwwroot/resource/resource.component.html",
	styleUrls: ["wwwroot/resource/resource.component.css"],
    selector: "resource",
    providers: ["resourceActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResourceComponent {
    constructor(private resourceActionCreator: ResourceActionCreator) { }
  
}
