require("./inventory-type-editor.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    templateUrl: "wwwroot/inventory-type/inventory-type-editor.component.html",
	styleUrls: ["wwwroot/inventory-type/inventory-type-editor.component.css"],
    selector: "inventory-type-editor",
    inputs: ['entity','addOrUpdate','remove','create'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class InventoryTypeEditorComponent {}


