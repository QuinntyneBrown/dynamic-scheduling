import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class VendorActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, vendorService, guid) {
        super($location,vendorService,dispatcher,guid,AddOrUpdateVendorAction,AllVendorsAction,RemoveVendorAction,SetCurrentVendorAction)
    }    

	addOrUpdateSuccess = options => this.dispatcher.dispatch(new AddOrUpdateVendorSuccessAction(options.entity));

	currentVendorRemoved = () => this.dispatcher.dispatch(new CurrentVendorRemovedAction());
}


export class AddOrUpdateVendorAction { constructor(public id, public entity) { } }

export class AllVendorsAction { constructor(public id, public entities) { } }

export class RemoveVendorAction { constructor(public id, public entity) { } }

export class VendorsFilterAction { constructor(public id, public term) { } }

export class SetCurrentVendorAction { constructor(public entity) { } }

export class AddOrUpdateVendorSuccessAction { constructor(public entity) { } }

export class CurrentVendorRemovedAction { constructor() { } }
