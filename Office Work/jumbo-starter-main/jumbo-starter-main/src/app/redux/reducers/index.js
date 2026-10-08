import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import contactsApp from "./contactsApp"
import { profileReducer, userReducer } from './userReducer';

const exportReducers = history => {
    return combineReducers({
        router: connectRouter(history),
        contactsApp: contactsApp,
        user: userReducer,
        profile: profileReducer,
    });
};

export default exportReducers;

