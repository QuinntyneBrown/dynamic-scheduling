import * as actions from "./schedule.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeScheduleReducer = (state, action) => {
    if (action instanceof actions.RemoveScheduleAction)
        pluckOut({ items: state.schedules, value: action.entity.id });
    return state;
}

export const addScheduleReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateScheduleAction) {
        addOrUpdate({ items: state.schedules, item: action.entity });
    }
    return state;
}

export const allSchedulesReducer = (state, action) => {
    if (action instanceof actions.AllSchedulesAction) {
        state.schedules = action.entities;
    }
    return state;
}

export const setCurrentScheduleReducer = (state, action) => {
    if (action instanceof actions.SetCurrentScheduleAction) {
        state.currentScheduleId = action.id;
    }
    return state;
}
