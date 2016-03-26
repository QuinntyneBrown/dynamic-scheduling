import * as actions from "./alert.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeAlertReducer = (state, action) => {
    if (action instanceof actions.RemoveAlertAction)
        pluckOut({ items: state.alerts, value: action.entity.id });
    return state;
}

export const addAlertReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateAlertAction) {
        addOrUpdate({ items: state.alerts, item: action.entity });
    }
    return state;
}

export const allAlertsReducer = (state, action) => {
    if (action instanceof actions.AllAlertsAction) {
        state.alerts = action.entities;
    }
    return state;
}

export const setCurrentAlertReducer = (state, action) => {
    if (action instanceof actions.SetCurrentAlertAction) {
        state.currentAlertId = action.id;
    }
    return state;
}
