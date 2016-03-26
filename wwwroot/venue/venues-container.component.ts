require("./venues-container.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import * as actions from "./venue.actions";
import { pluck } from "../core/pluck";
import { Venue } from "./venue.model";

@Component({
    routes: ["/admin/venues","/admin/venue/edit/:venueId"],
    templateUrl: "wwwroot/venue/venues-container.component.html",
    styleUrls: ["wwwroot/venue/venues-container.component.css"],
    selector: "venues-container",
    providers: ["$location","$routeParams","venueActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
@CanActivate(["$q", "$route", "invokeAsync", "venueActionCreator", ($q: angular.IQService, $route: angular.route.IRouteService, invokeAsync, venueActionCreator: actions.VenueActionCreator) => {
    var venueId = $route.current.params.venueId;
    var promises = [invokeAsync(venueActionCreator.all)];
    if (venueId) { promises.push(invokeAsync({ action: venueActionCreator.getById, params: { id: venueId } })) };
    return $q.all(promises);
}])
export class VenuesContainerComponent { 
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private venueActionCreator: actions.VenueActionCreator) { }
    storeOnChange = state => {        
        this.entities = state.venues;

		if (state.lastTriggeredByAction instanceof actions.SetCurrentVenueAction && !state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/venues");

        if (state.lastTriggeredByAction instanceof actions.SetCurrentVenueAction && state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/venue/edit/" + state.lastTriggeredByAction.entity.id);
        
        if (state.lastTriggeredByAction instanceof actions.RemoveVenueAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["venueId"]), items: this.entities }) as Venue;
            if (Object.keys(this.entity).length === 0) { this.$location.path("/admin/venues"); }
        }
    }

    ngOnInit = () => {
        if (this.$routeParams["venueId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["venueId"]), items: this.entities }) as Venue;
        } else {
            this.entity = new Venue();
        }
    }

    edit = entity => this.venueActionCreator.edit(entity);
    remove = entity => this.venueActionCreator.remove(entity);
    create = entity => this.venueActionCreator.create();
    addOrUpdate = options => this.venueActionCreator.addOrUpdate({ data: options.data });

    entity;
    entities;
}
