require("./inventory-type-list.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    templateUrl: "wwwroot/inventory-type/inventory-type-list.component.html",
	styleUrls: ["wwwroot/inventory-type/inventory-type-list.component.css"],
    selector: "inventory-type-list",
    inputs: ['entities','edit','remove'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class InventoryTypeListComponent {
    constructor() { }     
}
