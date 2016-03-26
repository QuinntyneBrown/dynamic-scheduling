import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class OrganizationActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, organizationService, guid) {
        super($location,organizationService,dispatcher,guid,AddOrUpdateOrganizationAction,AllOrganizationsAction,RemoveOrganizationAction,SetCurrentOrganizationAction)
    }    

	addOrUpdateSuccess = options => this.dispatcher.dispatch(new AddOrUpdateOrganizationSuccessAction(options.entity));

	currentOrganizationRemoved = () => this.dispatcher.dispatch(new CurrentOrganizationRemovedAction());
}


export class AddOrUpdateOrganizationAction { constructor(public id, public entity) { } }

export class AllOrganizationsAction { constructor(public id, public entities) { } }

export class RemoveOrganizationAction { constructor(public id, public entity) { } }

export class OrganizationsFilterAction { constructor(public id, public term) { } }

export class SetCurrentOrganizationAction { constructor(public entity) { } }

export class AddOrUpdateOrganizationSuccessAction { constructor(public entity) { } }

export class CurrentOrganizationRemovedAction { constructor() { } }
