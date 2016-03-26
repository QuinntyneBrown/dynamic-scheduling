require("./inventory-type.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import { InventoryTypeActionCreator } from "./inventory-type.actions";

@Component({
    templateUrl: "wwwroot/inventory-type/inventory-type.component.html",
	styleUrls: ["wwwroot/inventory-type/inventory-type.component.css"],
    selector: "inventory-type",
    providers: ["inventoryTypeActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class InventoryTypeComponent {
    constructor(private inventoryTypeActionCreator: InventoryTypeActionCreator) { }
  
}
