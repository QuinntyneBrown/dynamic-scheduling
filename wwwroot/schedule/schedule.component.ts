require("./schedule.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import { ScheduleActionCreator } from "./schedule.actions";

@Component({
    templateUrl: "wwwroot/schedule/schedule.component.html",
	styleUrls: ["wwwroot/schedule/schedule.component.css"],
    selector: "schedule",
    providers: ["scheduleActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScheduleComponent {
    constructor(private scheduleActionCreator: ScheduleActionCreator) { }
  
}
