import * as actions from "./resource.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeResourceReducer = (state, action) => {
    if (action instanceof actions.RemoveResourceAction)
        pluckOut({ items: state.resources, value: action.entity.id });
    return state;
}

export const addResourceReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateResourceAction) {
        addOrUpdate({ items: state.resources, item: action.entity });
    }
    return state;
}

export const allResourcesReducer = (state, action) => {
    if (action instanceof actions.AllResourcesAction) {
        state.resources = action.entities;
    }
    return state;
}

export const setCurrentResourceReducer = (state, action) => {
    if (action instanceof actions.SetCurrentResourceAction) {
        state.currentResourceId = action.id;
    }
    return state;
}
