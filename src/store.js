import { createStore, combineReducers } from "redux";

// Reducer imports
import todoReducer from './components/reducers/todoReducer';

const reducers = combineReducers({todo: todoReducer});

const store = createStore(reducers);

export default store;