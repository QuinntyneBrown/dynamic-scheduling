import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class ReportActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, reportService, guid) {
        super($location,reportService,dispatcher,guid,AddOrUpdateReportAction,AllReportsAction,RemoveReportAction,SetCurrentReportAction)
    }    

	addOrUpdateSuccess = options => this.dispatcher.dispatch(new AddOrUpdateReportSuccessAction(options.entity));

	currentReportRemoved = () => this.dispatcher.dispatch(new CurrentReportRemovedAction());
}


export class AddOrUpdateReportAction { constructor(public id, public entity) { } }

export class AllReportsAction { constructor(public id, public entities) { } }

export class RemoveReportAction { constructor(public id, public entity) { } }

export class ReportsFilterAction { constructor(public id, public term) { } }

export class SetCurrentReportAction { constructor(public entity) { } }

export class AddOrUpdateReportSuccessAction { constructor(public entity) { } }

export class CurrentReportRemovedAction { constructor() { } }
