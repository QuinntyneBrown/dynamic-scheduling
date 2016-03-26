require("./equipment-editor.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    templateUrl: "wwwroot/equipment/equipment-editor.component.html",
	styleUrls: ["wwwroot/equipment/equipment-editor.component.css"],
    selector: "equipment-editor",
    inputs: ['entity','addOrUpdate','remove','create'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class EquipmentEditorComponent {}


