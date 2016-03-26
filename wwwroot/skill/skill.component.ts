require("./skill.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import { SkillActionCreator } from "./skill.actions";

@Component({
    templateUrl: "wwwroot/skill/skill.component.html",
	styleUrls: ["wwwroot/skill/skill.component.css"],
    selector: "skill",
    providers: ["skillActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillComponent {
    constructor(private skillActionCreator: SkillActionCreator) { }
  
}
