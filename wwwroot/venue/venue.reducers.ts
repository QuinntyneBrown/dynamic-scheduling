import * as actions from "./venue.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeVenueReducer = (state, action) => {
    if (action instanceof actions.RemoveVenueAction)
        pluckOut({ items: state.venues, value: action.entity.id });
    return state;
}

export const addVenueReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateVenueAction) {
        addOrUpdate({ items: state.venues, item: action.entity });
    }
    return state;
}

export const allVenuesReducer = (state, action) => {
    if (action instanceof actions.AllVenuesAction) {
        state.venues = action.entities;
    }
    return state;
}

export const setCurrentVenueReducer = (state, action) => {
    if (action instanceof actions.SetCurrentVenueAction) {
        state.currentVenueId = action.id;
    }
    return state;
}
