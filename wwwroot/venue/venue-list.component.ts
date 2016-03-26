require("./venue-list.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    templateUrl: "wwwroot/venue/venue-list.component.html",
	styleUrls: ["wwwroot/venue/venue-list.component.css"],
    selector: "venue-list",
    inputs: ['entities','edit','remove'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class VenueListComponent {
    constructor() { }     
}
