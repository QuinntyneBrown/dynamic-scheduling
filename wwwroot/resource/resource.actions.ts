import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class ResourceActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, resourceService, guid) {
        super($location,resourceService,dispatcher,guid,AddOrUpdateResourceAction,AllResourcesAction,RemoveResourceAction,SetCurrentResourceAction)
    }    

	addOrUpdateSuccess = options => this.dispatcher.dispatch(new AddOrUpdateResourceSuccessAction(options.entity));

	currentResourceRemoved = () => this.dispatcher.dispatch(new CurrentResourceRemovedAction());
}


export class AddOrUpdateResourceAction { constructor(public id, public entity) { } }

export class AllResourcesAction { constructor(public id, public entities) { } }

export class RemoveResourceAction { constructor(public id, public entity) { } }

export class ResourcesFilterAction { constructor(public id, public term) { } }

export class SetCurrentResourceAction { constructor(public entity) { } }

export class AddOrUpdateResourceSuccessAction { constructor(public entity) { } }

export class CurrentResourceRemovedAction { constructor() { } }
