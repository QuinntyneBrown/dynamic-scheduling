require("./equipment.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import { EquipmentActionCreator } from "./equipment.actions";

@Component({
    templateUrl: "wwwroot/equipment/equipment.component.html",
	styleUrls: ["wwwroot/equipment/equipment.component.css"],
    selector: "equipment",
    providers: ["equipmentActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class EquipmentComponent {
    constructor(private equipmentActionCreator: EquipmentActionCreator) { }
  
}
