require("./locations-container.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import * as actions from "./location.actions";
import { pluck } from "../core/pluck";
import { Location } from "./location.model";

@Component({
    routes: ["/admin/locations","/admin/location/edit/:locationId"],
    templateUrl: "wwwroot/location/locations-container.component.html",
    styleUrls: ["wwwroot/location/locations-container.component.css"],
    selector: "locations-container",
    providers: ["$location","$routeParams","locationActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
@CanActivate(["$q", "$route", "invokeAsync", "locationActionCreator", ($q: angular.IQService, $route: angular.route.IRouteService, invokeAsync, locationActionCreator: actions.LocationActionCreator) => {
    var locationId = $route.current.params.locationId;
    var promises = [invokeAsync(locationActionCreator.all)];
    if (locationId) { promises.push(invokeAsync({ action: locationActionCreator.getById, params: { id: locationId } })) };
    return $q.all(promises);
}])
export class LocationsContainerComponent { 
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private locationActionCreator: actions.LocationActionCreator) { }
    storeOnChange = state => {        
        this.entities = state.locations;

		if (state.lastTriggeredByAction instanceof actions.SetCurrentLocationAction && !state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/locations");

        if (state.lastTriggeredByAction instanceof actions.SetCurrentLocationAction && state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/location/edit/" + state.lastTriggeredByAction.entity.id);
        
        if (state.lastTriggeredByAction instanceof actions.RemoveLocationAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["locationId"]), items: this.entities }) as Location;
            if (Object.keys(this.entity).length === 0) { this.$location.path("/admin/locations"); }
        }
    }

    ngOnInit = () => {
        if (this.$routeParams["locationId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["locationId"]), items: this.entities }) as Location;
        } else {
            this.entity = new Location();
        }
    }

    edit = entity => this.locationActionCreator.edit(entity);
    remove = entity => this.locationActionCreator.remove(entity);
    create = entity => this.locationActionCreator.create();
    addOrUpdate = options => this.locationActionCreator.addOrUpdate({ data: options.data });

    entity;
    entities;
}
