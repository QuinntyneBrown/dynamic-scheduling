require("./skill-editor.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    templateUrl: "wwwroot/skill/skill-editor.component.html",
	styleUrls: ["wwwroot/skill/skill-editor.component.css"],
    selector: "skill-editor",
    inputs: ['entity','addOrUpdate','remove','create'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillEditorComponent {}


