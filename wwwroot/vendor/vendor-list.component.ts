require("./vendor-list.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    templateUrl: "wwwroot/vendor/vendor-list.component.html",
	styleUrls: ["wwwroot/vendor/vendor-list.component.css"],
    selector: "vendor-list",
    inputs: ['entities','edit','remove'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class VendorListComponent {
    constructor() { }     
}
