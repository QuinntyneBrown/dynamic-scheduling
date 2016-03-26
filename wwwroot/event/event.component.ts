require("./event.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import { EventActionCreator } from "./event.actions";

@Component({
    templateUrl: "wwwroot/event/event.component.html",
	styleUrls: ["wwwroot/event/event.component.css"],
    selector: "event",
    providers: ["eventActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventComponent {
    constructor(private eventActionCreator: EventActionCreator) { }
  
}
