require("./alert-list.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    templateUrl: "wwwroot/alert/alert-list.component.html",
	styleUrls: ["wwwroot/alert/alert-list.component.css"],
    selector: "alert-list",
    inputs: ['entities','edit','remove'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertListComponent {
    constructor() { }     
}
