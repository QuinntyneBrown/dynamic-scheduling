import * as actions from "./report.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeReportReducer = (state, action) => {
    if (action instanceof actions.RemoveReportAction)
        pluckOut({ items: state.reports, value: action.entity.id });
    return state;
}

export const addReportReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateReportAction) {
        addOrUpdate({ items: state.reports, item: action.entity });
    }
    return state;
}

export const allReportsReducer = (state, action) => {
    if (action instanceof actions.AllReportsAction) {
        state.reports = action.entities;
    }
    return state;
}

export const setCurrentReportReducer = (state, action) => {
    if (action instanceof actions.SetCurrentReportAction) {
        state.currentReportId = action.id;
    }
    return state;
}
