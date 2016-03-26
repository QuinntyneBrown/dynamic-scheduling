import * as actions from "./vendor.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeVendorReducer = (state, action) => {
    if (action instanceof actions.RemoveVendorAction)
        pluckOut({ items: state.vendors, value: action.entity.id });
    return state;
}

export const addVendorReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateVendorAction) {
        addOrUpdate({ items: state.vendors, item: action.entity });
    }
    return state;
}

export const allVendorsReducer = (state, action) => {
    if (action instanceof actions.AllVendorsAction) {
        state.vendors = action.entities;
    }
    return state;
}

export const setCurrentVendorReducer = (state, action) => {
    if (action instanceof actions.SetCurrentVendorAction) {
        state.currentVendorId = action.id;
    }
    return state;
}
