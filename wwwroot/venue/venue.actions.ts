import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class VenueActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, venueService, guid) {
        super($location,venueService,dispatcher,guid,AddOrUpdateVenueAction,AllVenuesAction,RemoveVenueAction,SetCurrentVenueAction)
    }    

	addOrUpdateSuccess = options => this.dispatcher.dispatch(new AddOrUpdateVenueSuccessAction(options.entity));

	currentVenueRemoved = () => this.dispatcher.dispatch(new CurrentVenueRemovedAction());
}


export class AddOrUpdateVenueAction { constructor(public id, public entity) { } }

export class AllVenuesAction { constructor(public id, public entities) { } }

export class RemoveVenueAction { constructor(public id, public entity) { } }

export class VenuesFilterAction { constructor(public id, public term) { } }

export class SetCurrentVenueAction { constructor(public entity) { } }

export class AddOrUpdateVenueSuccessAction { constructor(public entity) { } }

export class CurrentVenueRemovedAction { constructor() { } }
