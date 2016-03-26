import * as actions from "./skill.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeSkillReducer = (state, action) => {
    if (action instanceof actions.RemoveSkillAction)
        pluckOut({ items: state.skills, value: action.entity.id });
    return state;
}

export const addSkillReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateSkillAction) {
        addOrUpdate({ items: state.skills, item: action.entity });
    }
    return state;
}

export const allSkillsReducer = (state, action) => {
    if (action instanceof actions.AllSkillsAction) {
        state.skills = action.entities;
    }
    return state;
}

export const setCurrentSkillReducer = (state, action) => {
    if (action instanceof actions.SetCurrentSkillAction) {
        state.currentSkillId = action.id;
    }
    return state;
}
