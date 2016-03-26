import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class TaskActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, taskService, guid) {
        super($location,taskService,dispatcher,guid,AddOrUpdateTaskAction,AllTasksAction,RemoveTaskAction,SetCurrentTaskAction)
    }    

	addOrUpdateSuccess = options => this.dispatcher.dispatch(new AddOrUpdateTaskSuccessAction(options.entity));

	currentTaskRemoved = () => this.dispatcher.dispatch(new CurrentTaskRemovedAction());
}


export class AddOrUpdateTaskAction { constructor(public id, public entity) { } }

export class AllTasksAction { constructor(public id, public entities) { } }

export class RemoveTaskAction { constructor(public id, public entity) { } }

export class TasksFilterAction { constructor(public id, public term) { } }

export class SetCurrentTaskAction { constructor(public entity) { } }

export class AddOrUpdateTaskSuccessAction { constructor(public entity) { } }

export class CurrentTaskRemovedAction { constructor() { } }
