require("./projects-container.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import * as actions from "./project.actions";
import { pluck } from "../core/pluck";
import { Project } from "./project.model";

@Component({
    routes: ["/admin/projects","/admin/project/edit/:projectId"],
    templateUrl: "wwwroot/project/projects-container.component.html",
    styleUrls: ["wwwroot/project/projects-container.component.css"],
    selector: "projects-container",
    providers: ["$location","$routeParams","projectActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
@CanActivate(["$q", "$route", "invokeAsync", "projectActionCreator", ($q: angular.IQService, $route: angular.route.IRouteService, invokeAsync, projectActionCreator: actions.ProjectActionCreator) => {
    var projectId = $route.current.params.projectId;
    var promises = [invokeAsync(projectActionCreator.all)];
    if (projectId) { promises.push(invokeAsync({ action: projectActionCreator.getById, params: { id: projectId } })) };
    return $q.all(promises);
}])
export class ProjectsContainerComponent { 
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private projectActionCreator: actions.ProjectActionCreator) { }
    storeOnChange = state => {        
        this.entities = state.projects;

		if (state.lastTriggeredByAction instanceof actions.SetCurrentProjectAction && !state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/projects");

        if (state.lastTriggeredByAction instanceof actions.SetCurrentProjectAction && state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/project/edit/" + state.lastTriggeredByAction.entity.id);
        
        if (state.lastTriggeredByAction instanceof actions.RemoveProjectAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["projectId"]), items: this.entities }) as Project;
            if (Object.keys(this.entity).length === 0) { this.$location.path("/admin/projects"); }
        }
    }

    ngOnInit = () => {
        if (this.$routeParams["projectId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["projectId"]), items: this.entities }) as Project;
        } else {
            this.entity = new Project();
        }
    }

    edit = entity => this.projectActionCreator.edit(entity);
    remove = entity => this.projectActionCreator.remove(entity);
    create = entity => this.projectActionCreator.create();
    addOrUpdate = options => this.projectActionCreator.addOrUpdate({ data: options.data });

    entity;
    entities;
}
