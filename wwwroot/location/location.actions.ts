import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class LocationActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, locationService, guid) {
        super($location,locationService,dispatcher,guid,AddOrUpdateLocationAction,AllLocationsAction,RemoveLocationAction,SetCurrentLocationAction)
    }    

	addOrUpdateSuccess = options => this.dispatcher.dispatch(new AddOrUpdateLocationSuccessAction(options.entity));

	currentLocationRemoved = () => this.dispatcher.dispatch(new CurrentLocationRemovedAction());
}


export class AddOrUpdateLocationAction { constructor(public id, public entity) { } }

export class AllLocationsAction { constructor(public id, public entities) { } }

export class RemoveLocationAction { constructor(public id, public entity) { } }

export class LocationsFilterAction { constructor(public id, public term) { } }

export class SetCurrentLocationAction { constructor(public entity) { } }

export class AddOrUpdateLocationSuccessAction { constructor(public entity) { } }

export class CurrentLocationRemovedAction { constructor() { } }
