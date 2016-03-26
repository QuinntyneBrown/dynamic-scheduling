import * as actions from "./location.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeLocationReducer = (state, action) => {
    if (action instanceof actions.RemoveLocationAction)
        pluckOut({ items: state.locations, value: action.entity.id });
    return state;
}

export const addLocationReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateLocationAction) {
        addOrUpdate({ items: state.locations, item: action.entity });
    }
    return state;
}

export const allLocationsReducer = (state, action) => {
    if (action instanceof actions.AllLocationsAction) {
        state.locations = action.entities;
    }
    return state;
}

export const setCurrentLocationReducer = (state, action) => {
    if (action instanceof actions.SetCurrentLocationAction) {
        state.currentLocationId = action.id;
    }
    return state;
}
