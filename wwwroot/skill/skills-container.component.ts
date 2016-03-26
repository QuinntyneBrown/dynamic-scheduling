require("./skills-container.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import * as actions from "./skill.actions";
import { pluck } from "../core/pluck";
import { Skill } from "./skill.model";

@Component({
    routes: ["/admin/skills","/admin/skill/edit/:skillId"],
    templateUrl: "wwwroot/skill/skills-container.component.html",
    styleUrls: ["wwwroot/skill/skills-container.component.css"],
    selector: "skills-container",
    providers: ["$location","$routeParams","skillActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
@CanActivate(["$q", "$route", "invokeAsync", "skillActionCreator", ($q: angular.IQService, $route: angular.route.IRouteService, invokeAsync, skillActionCreator: actions.SkillActionCreator) => {
    var skillId = $route.current.params.skillId;
    var promises = [invokeAsync(skillActionCreator.all)];
    if (skillId) { promises.push(invokeAsync({ action: skillActionCreator.getById, params: { id: skillId } })) };
    return $q.all(promises);
}])
export class SkillsContainerComponent { 
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private skillActionCreator: actions.SkillActionCreator) { }
    storeOnChange = state => {        
        this.entities = state.skills;

		if (state.lastTriggeredByAction instanceof actions.SetCurrentSkillAction && !state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/skills");

        if (state.lastTriggeredByAction instanceof actions.SetCurrentSkillAction && state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/skill/edit/" + state.lastTriggeredByAction.entity.id);
        
        if (state.lastTriggeredByAction instanceof actions.RemoveSkillAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["skillId"]), items: this.entities }) as Skill;
            if (Object.keys(this.entity).length === 0) { this.$location.path("/admin/skills"); }
        }
    }

    ngOnInit = () => {
        if (this.$routeParams["skillId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["skillId"]), items: this.entities }) as Skill;
        } else {
            this.entity = new Skill();
        }
    }

    edit = entity => this.skillActionCreator.edit(entity);
    remove = entity => this.skillActionCreator.remove(entity);
    create = entity => this.skillActionCreator.create();
    addOrUpdate = options => this.skillActionCreator.addOrUpdate({ data: options.data });

    entity;
    entities;
}
