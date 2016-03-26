import * as actions from "./event.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeEventReducer = (state, action) => {
    if (action instanceof actions.RemoveEventAction)
        pluckOut({ items: state.events, value: action.entity.id });
    return state;
}

export const addEventReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateEventAction) {
        addOrUpdate({ items: state.events, item: action.entity });
    }
    return state;
}

export const allEventsReducer = (state, action) => {
    if (action instanceof actions.AllEventsAction) {
        state.events = action.entities;
    }
    return state;
}

export const setCurrentEventReducer = (state, action) => {
    if (action instanceof actions.SetCurrentEventAction) {
        state.currentEventId = action.id;
    }
    return state;
}
