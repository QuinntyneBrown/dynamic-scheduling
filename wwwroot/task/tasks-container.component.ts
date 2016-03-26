require("./tasks-container.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import * as actions from "./task.actions";
import { pluck } from "../core/pluck";
import { Task } from "./task.model";

@Component({
    routes: ["/admin/tasks","/admin/task/edit/:taskId"],
    templateUrl: "wwwroot/task/tasks-container.component.html",
    styleUrls: ["wwwroot/task/tasks-container.component.css"],
    selector: "tasks-container",
    providers: ["$location","$routeParams","taskActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
@CanActivate(["$q", "$route", "invokeAsync", "taskActionCreator", ($q: angular.IQService, $route: angular.route.IRouteService, invokeAsync, taskActionCreator: actions.TaskActionCreator) => {
    var taskId = $route.current.params.taskId;
    var promises = [invokeAsync(taskActionCreator.all)];
    if (taskId) { promises.push(invokeAsync({ action: taskActionCreator.getById, params: { id: taskId } })) };
    return $q.all(promises);
}])
export class TasksContainerComponent { 
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private taskActionCreator: actions.TaskActionCreator) { }
    storeOnChange = state => {        
        this.entities = state.tasks;

		if (state.lastTriggeredByAction instanceof actions.SetCurrentTaskAction && !state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/tasks");

        if (state.lastTriggeredByAction instanceof actions.SetCurrentTaskAction && state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/task/edit/" + state.lastTriggeredByAction.entity.id);
        
        if (state.lastTriggeredByAction instanceof actions.RemoveTaskAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["taskId"]), items: this.entities }) as Task;
            if (Object.keys(this.entity).length === 0) { this.$location.path("/admin/tasks"); }
        }
    }

    ngOnInit = () => {
        if (this.$routeParams["taskId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["taskId"]), items: this.entities }) as Task;
        } else {
            this.entity = new Task();
        }
    }

    edit = entity => this.taskActionCreator.edit(entity);
    remove = entity => this.taskActionCreator.remove(entity);
    create = entity => this.taskActionCreator.create();
    addOrUpdate = options => this.taskActionCreator.addOrUpdate({ data: options.data });

    entity;
    entities;
}
