require("./inventory.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import { InventoryActionCreator } from "./inventory.actions";

@Component({
    templateUrl: "wwwroot/inventory/inventory.component.html",
	styleUrls: ["wwwroot/inventory/inventory.component.css"],
    selector: "inventory",
    providers: ["inventoryActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class InventoryComponent {
    constructor(private inventoryActionCreator: InventoryActionCreator) { }
  
}
