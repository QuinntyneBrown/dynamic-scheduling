require("./schedules-container.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import * as actions from "./schedule.actions";
import { pluck } from "../core/pluck";
import { Schedule } from "./schedule.model";

@Component({
    routes: ["/admin/schedules","/admin/schedule/edit/:scheduleId"],
    templateUrl: "wwwroot/schedule/schedules-container.component.html",
    styleUrls: ["wwwroot/schedule/schedules-container.component.css"],
    selector: "schedules-container",
    providers: ["$location","$routeParams","scheduleActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
@CanActivate(["$q", "$route", "invokeAsync", "scheduleActionCreator", ($q: angular.IQService, $route: angular.route.IRouteService, invokeAsync, scheduleActionCreator: actions.ScheduleActionCreator) => {
    var scheduleId = $route.current.params.scheduleId;
    var promises = [invokeAsync(scheduleActionCreator.all)];
    if (scheduleId) { promises.push(invokeAsync({ action: scheduleActionCreator.getById, params: { id: scheduleId } })) };
    return $q.all(promises);
}])
export class SchedulesContainerComponent { 
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private scheduleActionCreator: actions.ScheduleActionCreator) { }
    storeOnChange = state => {        
        this.entities = state.schedules;

		if (state.lastTriggeredByAction instanceof actions.SetCurrentScheduleAction && !state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/schedules");

        if (state.lastTriggeredByAction instanceof actions.SetCurrentScheduleAction && state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/schedule/edit/" + state.lastTriggeredByAction.entity.id);
        
        if (state.lastTriggeredByAction instanceof actions.RemoveScheduleAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["scheduleId"]), items: this.entities }) as Schedule;
            if (Object.keys(this.entity).length === 0) { this.$location.path("/admin/schedules"); }
        }
    }

    ngOnInit = () => {
        if (this.$routeParams["scheduleId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["scheduleId"]), items: this.entities }) as Schedule;
        } else {
            this.entity = new Schedule();
        }
    }

    edit = entity => this.scheduleActionCreator.edit(entity);
    remove = entity => this.scheduleActionCreator.remove(entity);
    create = entity => this.scheduleActionCreator.create();
    addOrUpdate = options => this.scheduleActionCreator.addOrUpdate({ data: options.data });

    entity;
    entities;
}
