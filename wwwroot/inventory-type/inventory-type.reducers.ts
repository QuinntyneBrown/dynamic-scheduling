import * as actions from "./inventory-type.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeInventoryTypeReducer = (state, action) => {
    if (action instanceof actions.RemoveInventoryTypeAction)
        pluckOut({ items: state.inventoryTypes, value: action.entity.id });
    return state;
}

export const addInventoryTypeReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateInventoryTypeAction) {
        addOrUpdate({ items: state.inventoryTypes, item: action.entity });
    }
    return state;
}

export const allInventoryTypesReducer = (state, action) => {
    if (action instanceof actions.AllInventoryTypesAction) {
        state.inventoryTypes = action.entities;
    }
    return state;
}

export const setCurrentInventoryTypeReducer = (state, action) => {
    if (action instanceof actions.SetCurrentInventoryTypeAction) {
        state.currentInventoryTypeId = action.id;
    }
    return state;
}
