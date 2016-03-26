import * as actions from "./employee.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeEmployeeReducer = (state, action) => {
    if (action instanceof actions.RemoveEmployeeAction)
        pluckOut({ items: state.employees, value: action.entity.id });
    return state;
}

export const addEmployeeReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateEmployeeAction) {
        addOrUpdate({ items: state.employees, item: action.entity });
    }
    return state;
}

export const allEmployeesReducer = (state, action) => {
    if (action instanceof actions.AllEmployeesAction) {
        state.employees = action.entities;
    }
    return state;
}

export const setCurrentEmployeeReducer = (state, action) => {
    if (action instanceof actions.SetCurrentEmployeeAction) {
        state.currentEmployeeId = action.id;
    }
    return state;
}
