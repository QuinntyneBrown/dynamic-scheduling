require("./event-list.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    templateUrl: "wwwroot/event/event-list.component.html",
	styleUrls: ["wwwroot/event/event-list.component.css"],
    selector: "event-list",
    inputs: ['entities','edit','remove'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventListComponent {
    constructor() { }     
}
