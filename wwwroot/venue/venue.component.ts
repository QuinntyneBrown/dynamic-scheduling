require("./venue.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import { VenueActionCreator } from "./venue.actions";

@Component({
    templateUrl: "wwwroot/venue/venue.component.html",
	styleUrls: ["wwwroot/venue/venue.component.css"],
    selector: "venue",
    providers: ["venueActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class VenueComponent {
    constructor(private venueActionCreator: VenueActionCreator) { }
  
}
