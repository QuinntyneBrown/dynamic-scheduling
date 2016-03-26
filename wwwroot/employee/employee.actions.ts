import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class EmployeeActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, employeeService, guid) {
        super($location,employeeService,dispatcher,guid,AddOrUpdateEmployeeAction,AllEmployeesAction,RemoveEmployeeAction,SetCurrentEmployeeAction)
    }    

	addOrUpdateSuccess = options => this.dispatcher.dispatch(new AddOrUpdateEmployeeSuccessAction(options.entity));

	currentEmployeeRemoved = () => this.dispatcher.dispatch(new CurrentEmployeeRemovedAction());
}


export class AddOrUpdateEmployeeAction { constructor(public id, public entity) { } }

export class AllEmployeesAction { constructor(public id, public entities) { } }

export class RemoveEmployeeAction { constructor(public id, public entity) { } }

export class EmployeesFilterAction { constructor(public id, public term) { } }

export class SetCurrentEmployeeAction { constructor(public entity) { } }

export class AddOrUpdateEmployeeSuccessAction { constructor(public entity) { } }

export class CurrentEmployeeRemovedAction { constructor() { } }
