import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class ContactActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, contactService, guid) {
        super($location,contactService,dispatcher,guid,AddOrUpdateContactAction,AllContactsAction,RemoveContactAction,SetCurrentContactAction)
    }    

	addOrUpdateSuccess = options => this.dispatcher.dispatch(new AddOrUpdateContactSuccessAction(options.entity));

	currentContactRemoved = () => this.dispatcher.dispatch(new CurrentContactRemovedAction());
}


export class AddOrUpdateContactAction { constructor(public id, public entity) { } }

export class AllContactsAction { constructor(public id, public entities) { } }

export class RemoveContactAction { constructor(public id, public entity) { } }

export class ContactsFilterAction { constructor(public id, public term) { } }

export class SetCurrentContactAction { constructor(public entity) { } }

export class AddOrUpdateContactSuccessAction { constructor(public entity) { } }

export class CurrentContactRemovedAction { constructor() { } }
