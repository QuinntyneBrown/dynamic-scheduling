import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class EquipmentActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, equipmentService, guid) {
        super($location,equipmentService,dispatcher,guid,AddOrUpdateEquipmentAction,AllEquipmentsAction,RemoveEquipmentAction,SetCurrentEquipmentAction)
    }    

	addOrUpdateSuccess = options => this.dispatcher.dispatch(new AddOrUpdateEquipmentSuccessAction(options.entity));

	currentEquipmentRemoved = () => this.dispatcher.dispatch(new CurrentEquipmentRemovedAction());
}


export class AddOrUpdateEquipmentAction { constructor(public id, public entity) { } }

export class AllEquipmentsAction { constructor(public id, public entities) { } }

export class RemoveEquipmentAction { constructor(public id, public entity) { } }

export class EquipmentsFilterAction { constructor(public id, public term) { } }

export class SetCurrentEquipmentAction { constructor(public entity) { } }

export class AddOrUpdateEquipmentSuccessAction { constructor(public entity) { } }

export class CurrentEquipmentRemovedAction { constructor() { } }
