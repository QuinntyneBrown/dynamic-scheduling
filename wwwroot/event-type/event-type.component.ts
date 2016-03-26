require("./event-type.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import { EventTypeActionCreator } from "./event-type.actions";

@Component({
    templateUrl: "wwwroot/event-type/event-type.component.html",
	styleUrls: ["wwwroot/event-type/event-type.component.css"],
    selector: "event-type",
    providers: ["eventTypeActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventTypeComponent {
    constructor(private eventTypeActionCreator: EventTypeActionCreator) { }
  
}
