import { combineReducers, createStore } from "redux";
import { reducer } from './reducers/reducers';
const reducers = {
    reducer,
}

const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer);