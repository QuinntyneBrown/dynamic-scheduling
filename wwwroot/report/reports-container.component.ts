require("./reports-container.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import * as actions from "./report.actions";
import { pluck } from "../core/pluck";
import { Report } from "./report.model";

@Component({
    routes: ["/admin/reports","/admin/report/edit/:reportId"],
    templateUrl: "wwwroot/report/reports-container.component.html",
    styleUrls: ["wwwroot/report/reports-container.component.css"],
    selector: "reports-container",
    providers: ["$location","$routeParams","reportActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
@CanActivate(["$q", "$route", "invokeAsync", "reportActionCreator", ($q: angular.IQService, $route: angular.route.IRouteService, invokeAsync, reportActionCreator: actions.ReportActionCreator) => {
    var reportId = $route.current.params.reportId;
    var promises = [invokeAsync(reportActionCreator.all)];
    if (reportId) { promises.push(invokeAsync({ action: reportActionCreator.getById, params: { id: reportId } })) };
    return $q.all(promises);
}])
export class ReportsContainerComponent { 
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private reportActionCreator: actions.ReportActionCreator) { }
    storeOnChange = state => {        
        this.entities = state.reports;

		if (state.lastTriggeredByAction instanceof actions.SetCurrentReportAction && !state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/reports");

        if (state.lastTriggeredByAction instanceof actions.SetCurrentReportAction && state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/report/edit/" + state.lastTriggeredByAction.entity.id);
        
        if (state.lastTriggeredByAction instanceof actions.RemoveReportAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["reportId"]), items: this.entities }) as Report;
            if (Object.keys(this.entity).length === 0) { this.$location.path("/admin/reports"); }
        }
    }

    ngOnInit = () => {
        if (this.$routeParams["reportId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["reportId"]), items: this.entities }) as Report;
        } else {
            this.entity = new Report();
        }
    }

    edit = entity => this.reportActionCreator.edit(entity);
    remove = entity => this.reportActionCreator.remove(entity);
    create = entity => this.reportActionCreator.create();
    addOrUpdate = options => this.reportActionCreator.addOrUpdate({ data: options.data });

    entity;
    entities;
}
