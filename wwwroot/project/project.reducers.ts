import * as actions from "./project.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeProjectReducer = (state, action) => {
    if (action instanceof actions.RemoveProjectAction)
        pluckOut({ items: state.projects, value: action.entity.id });
    return state;
}

export const addProjectReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateProjectAction) {
        addOrUpdate({ items: state.projects, item: action.entity });
    }
    return state;
}

export const allProjectsReducer = (state, action) => {
    if (action instanceof actions.AllProjectsAction) {
        state.projects = action.entities;
    }
    return state;
}

export const setCurrentProjectReducer = (state, action) => {
    if (action instanceof actions.SetCurrentProjectAction) {
        state.currentProjectId = action.id;
    }
    return state;
}
