import { combineReducers } from "redux";
import {siteNameReducer} from './redusers/siteNameReducer';
import { counterReducer } from './redusers/counterReducer';

export const mainReducer = combineReducers({
    siteName : siteNameReducer,
    counter : counterReducer,
})