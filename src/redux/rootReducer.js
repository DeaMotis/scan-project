import { combineReducers } from 'redux';
import userReducer from './features/UserSlice';
import menuSlice from './features/MenuSlice';
import searchReducer from './features/SearchSlice';

const rootReducer = combineReducers({
    user: userReducer,
    menu: menuSlice,
    search: searchReducer
});

export default rootReducer;