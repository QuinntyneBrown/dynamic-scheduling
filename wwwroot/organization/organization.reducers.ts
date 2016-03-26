import * as actions from "./organization.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeOrganizationReducer = (state, action) => {
    if (action instanceof actions.RemoveOrganizationAction)
        pluckOut({ items: state.organizations, value: action.entity.id });
    return state;
}

export const addOrganizationReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateOrganizationAction) {
        addOrUpdate({ items: state.organizations, item: action.entity });
    }
    return state;
}

export const allOrganizationsReducer = (state, action) => {
    if (action instanceof actions.AllOrganizationsAction) {
        state.organizations = action.entities;
    }
    return state;
}

export const setCurrentOrganizationReducer = (state, action) => {
    if (action instanceof actions.SetCurrentOrganizationAction) {
        state.currentOrganizationId = action.id;
    }
    return state;
}
