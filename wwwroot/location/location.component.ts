require("./location.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import { LocationActionCreator } from "./location.actions";

@Component({
    templateUrl: "wwwroot/location/location.component.html",
	styleUrls: ["wwwroot/location/location.component.css"],
    selector: "location",
    providers: ["locationActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class LocationComponent {
    constructor(private locationActionCreator: LocationActionCreator) { }
  
}
