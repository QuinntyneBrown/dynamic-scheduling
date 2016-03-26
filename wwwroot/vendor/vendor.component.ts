require("./vendor.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import { VendorActionCreator } from "./vendor.actions";

@Component({
    templateUrl: "wwwroot/vendor/vendor.component.html",
	styleUrls: ["wwwroot/vendor/vendor.component.css"],
    selector: "vendor",
    providers: ["vendorActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class VendorComponent {
    constructor(private vendorActionCreator: VendorActionCreator) { }
  
}
