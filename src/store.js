import { legacy_createStore as createStore, combineReducers, applyMiddleware} from "redux";
import thunk from 'redux-thunk'
import { getUsersReducer, loginReducer, tokenReducer } from './reducers'


const rootReducer = combineReducers({
    getUsersReducer,
    loginReducer,
    tokenReducer
});
export const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
); 
