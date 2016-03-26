import * as actions from "./task.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeTaskReducer = (state, action) => {
    if (action instanceof actions.RemoveTaskAction)
        pluckOut({ items: state.tasks, value: action.entity.id });
    return state;
}

export const addTaskReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateTaskAction) {
        addOrUpdate({ items: state.tasks, item: action.entity });
    }
    return state;
}

export const allTasksReducer = (state, action) => {
    if (action instanceof actions.AllTasksAction) {
        state.tasks = action.entities;
    }
    return state;
}

export const setCurrentTaskReducer = (state, action) => {
    if (action instanceof actions.SetCurrentTaskAction) {
        state.currentTaskId = action.id;
    }
    return state;
}
