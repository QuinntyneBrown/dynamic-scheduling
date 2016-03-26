require("./location-list.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    templateUrl: "wwwroot/location/location-list.component.html",
	styleUrls: ["wwwroot/location/location-list.component.css"],
    selector: "location-list",
    inputs: ['entities','edit','remove'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class LocationListComponent {
    constructor() { }     
}
