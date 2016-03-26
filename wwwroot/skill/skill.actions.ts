import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class SkillActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, skillService, guid) {
        super($location,skillService,dispatcher,guid,AddOrUpdateSkillAction,AllSkillsAction,RemoveSkillAction,SetCurrentSkillAction)
    }    

	addOrUpdateSuccess = options => this.dispatcher.dispatch(new AddOrUpdateSkillSuccessAction(options.entity));

	currentSkillRemoved = () => this.dispatcher.dispatch(new CurrentSkillRemovedAction());
}


export class AddOrUpdateSkillAction { constructor(public id, public entity) { } }

export class AllSkillsAction { constructor(public id, public entities) { } }

export class RemoveSkillAction { constructor(public id, public entity) { } }

export class SkillsFilterAction { constructor(public id, public term) { } }

export class SetCurrentSkillAction { constructor(public entity) { } }

export class AddOrUpdateSkillSuccessAction { constructor(public entity) { } }

export class CurrentSkillRemovedAction { constructor() { } }
