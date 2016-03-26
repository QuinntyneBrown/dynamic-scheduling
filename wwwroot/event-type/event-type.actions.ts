import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class EventTypeActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, eventTypeService, guid) {
        super($location,eventTypeService,dispatcher,guid,AddOrUpdateEventTypeAction,AllEventTypesAction,RemoveEventTypeAction,SetCurrentEventTypeAction)
    }    

	addOrUpdateSuccess = options => this.dispatcher.dispatch(new AddOrUpdateEventTypeSuccessAction(options.entity));

	currentEventTypeRemoved = () => this.dispatcher.dispatch(new CurrentEventTypeRemovedAction());
}


export class AddOrUpdateEventTypeAction { constructor(public id, public entity) { } }

export class AllEventTypesAction { constructor(public id, public entities) { } }

export class RemoveEventTypeAction { constructor(public id, public entity) { } }

export class EventTypesFilterAction { constructor(public id, public term) { } }

export class SetCurrentEventTypeAction { constructor(public entity) { } }

export class AddOrUpdateEventTypeSuccessAction { constructor(public entity) { } }

export class CurrentEventTypeRemovedAction { constructor() { } }
