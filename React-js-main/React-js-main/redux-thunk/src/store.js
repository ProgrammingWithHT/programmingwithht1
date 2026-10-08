import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools} from 'redux-devtools-extension'
import { userReducer } from './redux/reducers/userReducer';

const rootReducer = combineReducers({
    userList: userReducer,
}); //comineReducers can be used to combine multiply reducer beacuse only one reducer run in react root, so we make multiple reducer and combine them

const initialState = {};

const middleware = [thunk]

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;