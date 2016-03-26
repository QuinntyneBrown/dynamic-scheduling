require("./alerts-container.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import * as actions from "./alert.actions";
import { pluck } from "../core/pluck";
import { Alert } from "./alert.model";

@Component({
    routes: ["/admin/alerts","/admin/alert/edit/:alertId"],
    templateUrl: "wwwroot/alert/alerts-container.component.html",
    styleUrls: ["wwwroot/alert/alerts-container.component.css"],
    selector: "alerts-container",
    providers: ["$location","$routeParams","alertActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
@CanActivate(["$q", "$route", "invokeAsync", "alertActionCreator", ($q: angular.IQService, $route: angular.route.IRouteService, invokeAsync, alertActionCreator: actions.AlertActionCreator) => {
    var alertId = $route.current.params.alertId;
    var promises = [invokeAsync(alertActionCreator.all)];
    if (alertId) { promises.push(invokeAsync({ action: alertActionCreator.getById, params: { id: alertId } })) };
    return $q.all(promises);
}])
export class AlertsContainerComponent { 
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private alertActionCreator: actions.AlertActionCreator) { }
    storeOnChange = state => {        
        this.entities = state.alerts;

		if (state.lastTriggeredByAction instanceof actions.SetCurrentAlertAction && !state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/alerts");

        if (state.lastTriggeredByAction instanceof actions.SetCurrentAlertAction && state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/alert/edit/" + state.lastTriggeredByAction.entity.id);
        
        if (state.lastTriggeredByAction instanceof actions.RemoveAlertAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["alertId"]), items: this.entities }) as Alert;
            if (Object.keys(this.entity).length === 0) { this.$location.path("/admin/alerts"); }
        }
    }

    ngOnInit = () => {
        if (this.$routeParams["alertId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["alertId"]), items: this.entities }) as Alert;
        } else {
            this.entity = new Alert();
        }
    }

    edit = entity => this.alertActionCreator.edit(entity);
    remove = entity => this.alertActionCreator.remove(entity);
    create = entity => this.alertActionCreator.create();
    addOrUpdate = options => this.alertActionCreator.addOrUpdate({ data: options.data });

    entity;
    entities;
}
