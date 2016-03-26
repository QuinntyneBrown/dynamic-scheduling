require("../core/core.module");

import { SkillEditorComponent } from "./skill-editor.component";
import { SkillListComponent } from "./skill-list.component";
import { SkillComponent } from "./skill.component";
import { SkillsContainerComponent } from "./skills-container.component";
import { SkillActionCreator } from "./skill.actions";
import { SkillService } from "./skill.service";
import *  as reducers from "./skill.reducers";

var app = (<any>angular.module("app.skill", [
    "app.core"    
]));

app.service("skillActionCreator",["$location","dispatcher","skillService","guid",SkillActionCreator]);
app.service("skillService",["$q","apiEndpoint","fetch",SkillService]);
app.component(SkillEditorComponent);
app.component(SkillListComponent);
app.component(SkillComponent);
app.component(SkillsContainerComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
