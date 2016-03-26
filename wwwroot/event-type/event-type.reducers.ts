import * as actions from "./event-type.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeEventTypeReducer = (state, action) => {
    if (action instanceof actions.RemoveEventTypeAction)
        pluckOut({ items: state.eventTypes, value: action.entity.id });
    return state;
}

export const addEventTypeReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateEventTypeAction) {
        addOrUpdate({ items: state.eventTypes, item: action.entity });
    }
    return state;
}

export const allEventTypesReducer = (state, action) => {
    if (action instanceof actions.AllEventTypesAction) {
        state.eventTypes = action.entities;
    }
    return state;
}

export const setCurrentEventTypeReducer = (state, action) => {
    if (action instanceof actions.SetCurrentEventTypeAction) {
        state.currentEventTypeId = action.id;
    }
    return state;
}
