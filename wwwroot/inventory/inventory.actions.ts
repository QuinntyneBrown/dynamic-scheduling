import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class InventoryActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, inventoryService, guid) {
        super($location,inventoryService,dispatcher,guid,AddOrUpdateInventoryAction,AllInventorysAction,RemoveInventoryAction,SetCurrentInventoryAction)
    }    

	addOrUpdateSuccess = options => this.dispatcher.dispatch(new AddOrUpdateInventorySuccessAction(options.entity));

	currentInventoryRemoved = () => this.dispatcher.dispatch(new CurrentInventoryRemovedAction());
}


export class AddOrUpdateInventoryAction { constructor(public id, public entity) { } }

export class AllInventorysAction { constructor(public id, public entities) { } }

export class RemoveInventoryAction { constructor(public id, public entity) { } }

export class InventorysFilterAction { constructor(public id, public term) { } }

export class SetCurrentInventoryAction { constructor(public entity) { } }

export class AddOrUpdateInventorySuccessAction { constructor(public entity) { } }

export class CurrentInventoryRemovedAction { constructor() { } }
