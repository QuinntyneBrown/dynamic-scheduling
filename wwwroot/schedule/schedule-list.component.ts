require("./schedule-list.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    templateUrl: "wwwroot/schedule/schedule-list.component.html",
	styleUrls: ["wwwroot/schedule/schedule-list.component.css"],
    selector: "schedule-list",
    inputs: ['entities','edit','remove'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScheduleListComponent {
    constructor() { }     
}
