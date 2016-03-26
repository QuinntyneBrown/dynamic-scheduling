require("./inventory-list.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    templateUrl: "wwwroot/inventory/inventory-list.component.html",
	styleUrls: ["wwwroot/inventory/inventory-list.component.css"],
    selector: "inventory-list",
    inputs: ['entities','edit','remove'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class InventoryListComponent {
    constructor() { }     
}
