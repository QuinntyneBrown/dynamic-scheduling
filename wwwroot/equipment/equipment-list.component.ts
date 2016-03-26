require("./equipment-list.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    templateUrl: "wwwroot/equipment/equipment-list.component.html",
	styleUrls: ["wwwroot/equipment/equipment-list.component.css"],
    selector: "equipment-list",
    inputs: ['entities','edit','remove'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class EquipmentListComponent {
    constructor() { }     
}
