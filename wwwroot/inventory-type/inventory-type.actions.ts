import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class InventoryTypeActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, inventoryTypeService, guid) {
        super($location,inventoryTypeService,dispatcher,guid,AddOrUpdateInventoryTypeAction,AllInventoryTypesAction,RemoveInventoryTypeAction,SetCurrentInventoryTypeAction)
    }    

	addOrUpdateSuccess = options => this.dispatcher.dispatch(new AddOrUpdateInventoryTypeSuccessAction(options.entity));

	currentInventoryTypeRemoved = () => this.dispatcher.dispatch(new CurrentInventoryTypeRemovedAction());
}


export class AddOrUpdateInventoryTypeAction { constructor(public id, public entity) { } }

export class AllInventoryTypesAction { constructor(public id, public entities) { } }

export class RemoveInventoryTypeAction { constructor(public id, public entity) { } }

export class InventoryTypesFilterAction { constructor(public id, public term) { } }

export class SetCurrentInventoryTypeAction { constructor(public entity) { } }

export class AddOrUpdateInventoryTypeSuccessAction { constructor(public entity) { } }

export class CurrentInventoryTypeRemovedAction { constructor() { } }
