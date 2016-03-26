import * as actions from "./equipment.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeEquipmentReducer = (state, action) => {
    if (action instanceof actions.RemoveEquipmentAction)
        pluckOut({ items: state.equipments, value: action.entity.id });
    return state;
}

export const addEquipmentReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateEquipmentAction) {
        addOrUpdate({ items: state.equipments, item: action.entity });
    }
    return state;
}

export const allEquipmentsReducer = (state, action) => {
    if (action instanceof actions.AllEquipmentsAction) {
        state.equipments = action.entities;
    }
    return state;
}

export const setCurrentEquipmentReducer = (state, action) => {
    if (action instanceof actions.SetCurrentEquipmentAction) {
        state.currentEquipmentId = action.id;
    }
    return state;
}
