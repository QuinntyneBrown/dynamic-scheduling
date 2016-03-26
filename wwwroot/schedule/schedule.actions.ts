import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class ScheduleActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, scheduleService, guid) {
        super($location,scheduleService,dispatcher,guid,AddOrUpdateScheduleAction,AllSchedulesAction,RemoveScheduleAction,SetCurrentScheduleAction)
    }    

	addOrUpdateSuccess = options => this.dispatcher.dispatch(new AddOrUpdateScheduleSuccessAction(options.entity));

	currentScheduleRemoved = () => this.dispatcher.dispatch(new CurrentScheduleRemovedAction());
}


export class AddOrUpdateScheduleAction { constructor(public id, public entity) { } }

export class AllSchedulesAction { constructor(public id, public entities) { } }

export class RemoveScheduleAction { constructor(public id, public entity) { } }

export class SchedulesFilterAction { constructor(public id, public term) { } }

export class SetCurrentScheduleAction { constructor(public entity) { } }

export class AddOrUpdateScheduleSuccessAction { constructor(public entity) { } }

export class CurrentScheduleRemovedAction { constructor() { } }
