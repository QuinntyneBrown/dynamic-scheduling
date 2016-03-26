import * as actions from "./inventory.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeInventoryReducer = (state, action) => {
    if (action instanceof actions.RemoveInventoryAction)
        pluckOut({ items: state.inventorys, value: action.entity.id });
    return state;
}

export const addInventoryReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateInventoryAction) {
        addOrUpdate({ items: state.inventorys, item: action.entity });
    }
    return state;
}

export const allInventorysReducer = (state, action) => {
    if (action instanceof actions.AllInventorysAction) {
        state.inventorys = action.entities;
    }
    return state;
}

export const setCurrentInventoryReducer = (state, action) => {
    if (action instanceof actions.SetCurrentInventoryAction) {
        state.currentInventoryId = action.id;
    }
    return state;
}
