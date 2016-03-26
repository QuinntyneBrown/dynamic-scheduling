require("./skill-list.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    templateUrl: "wwwroot/skill/skill-list.component.html",
	styleUrls: ["wwwroot/skill/skill-list.component.css"],
    selector: "skill-list",
    inputs: ['entities','edit','remove'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillListComponent {
    constructor() { }     
}
