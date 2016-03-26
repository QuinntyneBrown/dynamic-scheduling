import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class AlertActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, alertService, guid) {
        super($location,alertService,dispatcher,guid,AddOrUpdateAlertAction,AllAlertsAction,RemoveAlertAction,SetCurrentAlertAction)
    }    

	addOrUpdateSuccess = options => this.dispatcher.dispatch(new AddOrUpdateAlertSuccessAction(options.entity));

	currentAlertRemoved = () => this.dispatcher.dispatch(new CurrentAlertRemovedAction());
}


export class AddOrUpdateAlertAction { constructor(public id, public entity) { } }

export class AllAlertsAction { constructor(public id, public entities) { } }

export class RemoveAlertAction { constructor(public id, public entity) { } }

export class AlertsFilterAction { constructor(public id, public term) { } }

export class SetCurrentAlertAction { constructor(public entity) { } }

export class AddOrUpdateAlertSuccessAction { constructor(public entity) { } }

export class CurrentAlertRemovedAction { constructor() { } }
