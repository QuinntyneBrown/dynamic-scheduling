import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class ProjectActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, projectService, guid) {
        super($location,projectService,dispatcher,guid,AddOrUpdateProjectAction,AllProjectsAction,RemoveProjectAction,SetCurrentProjectAction)
    }    

	addOrUpdateSuccess = options => this.dispatcher.dispatch(new AddOrUpdateProjectSuccessAction(options.entity));

	currentProjectRemoved = () => this.dispatcher.dispatch(new CurrentProjectRemovedAction());
}


export class AddOrUpdateProjectAction { constructor(public id, public entity) { } }

export class AllProjectsAction { constructor(public id, public entities) { } }

export class RemoveProjectAction { constructor(public id, public entity) { } }

export class ProjectsFilterAction { constructor(public id, public term) { } }

export class SetCurrentProjectAction { constructor(public entity) { } }

export class AddOrUpdateProjectSuccessAction { constructor(public entity) { } }

export class CurrentProjectRemovedAction { constructor() { } }
