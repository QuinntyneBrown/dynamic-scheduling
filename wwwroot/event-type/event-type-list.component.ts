require("./event-type-list.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    templateUrl: "wwwroot/event-type/event-type-list.component.html",
	styleUrls: ["wwwroot/event-type/event-type-list.component.css"],
    selector: "event-type-list",
    inputs: ['entities','edit','remove'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventTypeListComponent {
    constructor() { }     
}
