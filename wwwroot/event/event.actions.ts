import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class EventActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, eventService, guid) {
        super($location,eventService,dispatcher,guid,AddOrUpdateEventAction,AllEventsAction,RemoveEventAction,SetCurrentEventAction)
    }    

	addOrUpdateSuccess = options => this.dispatcher.dispatch(new AddOrUpdateEventSuccessAction(options.entity));

	currentEventRemoved = () => this.dispatcher.dispatch(new CurrentEventRemovedAction());
}


export class AddOrUpdateEventAction { constructor(public id, public entity) { } }

export class AllEventsAction { constructor(public id, public entities) { } }

export class RemoveEventAction { constructor(public id, public entity) { } }

export class EventsFilterAction { constructor(public id, public term) { } }

export class SetCurrentEventAction { constructor(public entity) { } }

export class AddOrUpdateEventSuccessAction { constructor(public entity) { } }

export class CurrentEventRemovedAction { constructor() { } }
