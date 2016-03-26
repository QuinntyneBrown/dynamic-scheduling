require("./resources-container.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import * as actions from "./resource.actions";
import { pluck } from "../core/pluck";
import { Resource } from "./resource.model";

@Component({
    routes: ["/admin/resources","/admin/resource/edit/:resourceId"],
    templateUrl: "wwwroot/resource/resources-container.component.html",
    styleUrls: ["wwwroot/resource/resources-container.component.css"],
    selector: "resources-container",
    providers: ["$location","$routeParams","resourceActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
@CanActivate(["$q", "$route", "invokeAsync", "resourceActionCreator", ($q: angular.IQService, $route: angular.route.IRouteService, invokeAsync, resourceActionCreator: actions.ResourceActionCreator) => {
    var resourceId = $route.current.params.resourceId;
    var promises = [invokeAsync(resourceActionCreator.all)];
    if (resourceId) { promises.push(invokeAsync({ action: resourceActionCreator.getById, params: { id: resourceId } })) };
    return $q.all(promises);
}])
export class ResourcesContainerComponent { 
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private resourceActionCreator: actions.ResourceActionCreator) { }
    storeOnChange = state => {        
        this.entities = state.resources;

		if (state.lastTriggeredByAction instanceof actions.SetCurrentResourceAction && !state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/resources");

        if (state.lastTriggeredByAction instanceof actions.SetCurrentResourceAction && state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/resource/edit/" + state.lastTriggeredByAction.entity.id);
        
        if (state.lastTriggeredByAction instanceof actions.RemoveResourceAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["resourceId"]), items: this.entities }) as Resource;
            if (Object.keys(this.entity).length === 0) { this.$location.path("/admin/resources"); }
        }
    }

    ngOnInit = () => {
        if (this.$routeParams["resourceId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["resourceId"]), items: this.entities }) as Resource;
        } else {
            this.entity = new Resource();
        }
    }

    edit = entity => this.resourceActionCreator.edit(entity);
    remove = entity => this.resourceActionCreator.remove(entity);
    create = entity => this.resourceActionCreator.create();
    addOrUpdate = options => this.resourceActionCreator.addOrUpdate({ data: options.data });

    entity;
    entities;
}
