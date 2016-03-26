require("./inventory-editor.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    templateUrl: "wwwroot/inventory/inventory-editor.component.html",
	styleUrls: ["wwwroot/inventory/inventory-editor.component.css"],
    selector: "inventory-editor",
    inputs: ['entity','addOrUpdate','remove','create'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class InventoryEditorComponent {}


