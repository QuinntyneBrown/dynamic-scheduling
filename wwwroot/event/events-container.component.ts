require("./events-container.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import * as actions from "./event.actions";
import { pluck } from "../core/pluck";
import { Event } from "./event.model";

@Component({
    routes: ["/admin/events","/admin/event/edit/:eventId"],
    templateUrl: "wwwroot/event/events-container.component.html",
    styleUrls: ["wwwroot/event/events-container.component.css"],
    selector: "events-container",
    providers: ["$location","$routeParams","eventActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
@CanActivate(["$q", "$route", "invokeAsync", "eventActionCreator", ($q: angular.IQService, $route: angular.route.IRouteService, invokeAsync, eventActionCreator: actions.EventActionCreator) => {
    var eventId = $route.current.params.eventId;
    var promises = [invokeAsync(eventActionCreator.all)];
    if (eventId) { promises.push(invokeAsync({ action: eventActionCreator.getById, params: { id: eventId } })) };
    return $q.all(promises);
}])
export class EventsContainerComponent { 
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private eventActionCreator: actions.EventActionCreator) { }
    storeOnChange = state => {        
        this.entities = state.events;

		if (state.lastTriggeredByAction instanceof actions.SetCurrentEventAction && !state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/events");

        if (state.lastTriggeredByAction instanceof actions.SetCurrentEventAction && state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/event/edit/" + state.lastTriggeredByAction.entity.id);
        
        if (state.lastTriggeredByAction instanceof actions.RemoveEventAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["eventId"]), items: this.entities }) as Event;
            if (Object.keys(this.entity).length === 0) { this.$location.path("/admin/events"); }
        }
    }

    ngOnInit = () => {
        if (this.$routeParams["eventId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["eventId"]), items: this.entities }) as Event;
        } else {
            this.entity = new Event();
        }
    }

    edit = entity => this.eventActionCreator.edit(entity);
    remove = entity => this.eventActionCreator.remove(entity);
    create = entity => this.eventActionCreator.create();
    addOrUpdate = options => this.eventActionCreator.addOrUpdate({ data: options.data });

    entity;
    entities;
}
