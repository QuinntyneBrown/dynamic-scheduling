require("./event-types-container.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import * as actions from "./event-type.actions";
import { pluck } from "../core/pluck";
import { EventType } from "./event-type.model";

@Component({
    routes: ["/admin/eventtypes","/admin/eventtype/edit/:eventTypeId"],
    templateUrl: "wwwroot/event-type/event-types-container.component.html",
    styleUrls: ["wwwroot/event-type/event-types-container.component.css"],
    selector: "event-types-container",
    providers: ["$location","$routeParams","eventTypeActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
@CanActivate(["$q", "$route", "invokeAsync", "eventTypeActionCreator", ($q: angular.IQService, $route: angular.route.IRouteService, invokeAsync, eventTypeActionCreator: actions.EventTypeActionCreator) => {
    var eventTypeId = $route.current.params.eventTypeId;
    var promises = [invokeAsync(eventTypeActionCreator.all)];
    if (eventTypeId) { promises.push(invokeAsync({ action: eventTypeActionCreator.getById, params: { id: eventTypeId } })) };
    return $q.all(promises);
}])
export class EventTypesContainerComponent { 
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private eventTypeActionCreator: actions.EventTypeActionCreator) { }
    storeOnChange = state => {        
        this.entities = state.eventTypes;

		if (state.lastTriggeredByAction instanceof actions.SetCurrentEventTypeAction && !state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/eventtypes");

        if (state.lastTriggeredByAction instanceof actions.SetCurrentEventTypeAction && state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/eventtype/edit/" + state.lastTriggeredByAction.entity.id);
        
        if (state.lastTriggeredByAction instanceof actions.RemoveEventTypeAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["eventTypeId"]), items: this.entities }) as EventType;
            if (Object.keys(this.entity).length === 0) { this.$location.path("/admin/eventtypes"); }
        }
    }

    ngOnInit = () => {
        if (this.$routeParams["eventTypeId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["eventTypeId"]), items: this.entities }) as EventType;
        } else {
            this.entity = new EventType();
        }
    }

    edit = entity => this.eventTypeActionCreator.edit(entity);
    remove = entity => this.eventTypeActionCreator.remove(entity);
    create = entity => this.eventTypeActionCreator.create();
    addOrUpdate = options => this.eventTypeActionCreator.addOrUpdate({ data: options.data });

    entity;
    entities;
}
