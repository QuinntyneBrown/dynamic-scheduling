require("./organizations-container.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import * as actions from "./organization.actions";
import { pluck } from "../core/pluck";
import { Organization } from "./organization.model";

@Component({
    routes: ["/admin/organizations","/admin/organization/edit/:organizationId"],
    templateUrl: "wwwroot/organization/organizations-container.component.html",
    styleUrls: ["wwwroot/organization/organizations-container.component.css"],
    selector: "organizations-container",
    providers: ["$location","$routeParams","organizationActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
@CanActivate(["$q", "$route", "invokeAsync", "organizationActionCreator", ($q: angular.IQService, $route: angular.route.IRouteService, invokeAsync, organizationActionCreator: actions.OrganizationActionCreator) => {
    var organizationId = $route.current.params.organizationId;
    var promises = [invokeAsync(organizationActionCreator.all)];
    if (organizationId) { promises.push(invokeAsync({ action: organizationActionCreator.getById, params: { id: organizationId } })) };
    return $q.all(promises);
}])
export class OrganizationsContainerComponent { 
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private organizationActionCreator: actions.OrganizationActionCreator) { }
    storeOnChange = state => {        
        this.entities = state.organizations;

		if (state.lastTriggeredByAction instanceof actions.SetCurrentOrganizationAction && !state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/organizations");

        if (state.lastTriggeredByAction instanceof actions.SetCurrentOrganizationAction && state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/organization/edit/" + state.lastTriggeredByAction.entity.id);
        
        if (state.lastTriggeredByAction instanceof actions.RemoveOrganizationAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["organizationId"]), items: this.entities }) as Organization;
            if (Object.keys(this.entity).length === 0) { this.$location.path("/admin/organizations"); }
        }
    }

    ngOnInit = () => {
        if (this.$routeParams["organizationId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["organizationId"]), items: this.entities }) as Organization;
        } else {
            this.entity = new Organization();
        }
    }

    edit = entity => this.organizationActionCreator.edit(entity);
    remove = entity => this.organizationActionCreator.remove(entity);
    create = entity => this.organizationActionCreator.create();
    addOrUpdate = options => this.organizationActionCreator.addOrUpdate({ data: options.data });

    entity;
    entities;
}
