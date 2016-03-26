require("./employees-container.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import * as actions from "./employee.actions";
import { pluck } from "../core/pluck";
import { Employee } from "./employee.model";

@Component({
    routes: ["/admin/employees","/admin/employee/edit/:employeeId"],
    templateUrl: "wwwroot/employee/employees-container.component.html",
    styleUrls: ["wwwroot/employee/employees-container.component.css"],
    selector: "employees-container",
    providers: ["$location","$routeParams","employeeActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
@CanActivate(["$q", "$route", "invokeAsync", "employeeActionCreator", ($q: angular.IQService, $route: angular.route.IRouteService, invokeAsync, employeeActionCreator: actions.EmployeeActionCreator) => {
    var employeeId = $route.current.params.employeeId;
    var promises = [invokeAsync(employeeActionCreator.all)];
    if (employeeId) { promises.push(invokeAsync({ action: employeeActionCreator.getById, params: { id: employeeId } })) };
    return $q.all(promises);
}])
export class EmployeesContainerComponent { 
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private employeeActionCreator: actions.EmployeeActionCreator) { }
    storeOnChange = state => {        
        this.entities = state.employees;

		if (state.lastTriggeredByAction instanceof actions.SetCurrentEmployeeAction && !state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/employees");

        if (state.lastTriggeredByAction instanceof actions.SetCurrentEmployeeAction && state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/employee/edit/" + state.lastTriggeredByAction.entity.id);
        
        if (state.lastTriggeredByAction instanceof actions.RemoveEmployeeAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["employeeId"]), items: this.entities }) as Employee;
            if (Object.keys(this.entity).length === 0) { this.$location.path("/admin/employees"); }
        }
    }

    ngOnInit = () => {
        if (this.$routeParams["employeeId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["employeeId"]), items: this.entities }) as Employee;
        } else {
            this.entity = new Employee();
        }
    }

    edit = entity => this.employeeActionCreator.edit(entity);
    remove = entity => this.employeeActionCreator.remove(entity);
    create = entity => this.employeeActionCreator.create();
    addOrUpdate = options => this.employeeActionCreator.addOrUpdate({ data: options.data });

    entity;
    entities;
}
