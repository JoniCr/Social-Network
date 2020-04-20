import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import sideBarReducer from "./sideBar-reducer";
import messagesReducer from "./messages-reducer";
import usersReducer from "./users-reducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    sideBarPage: sideBarReducer,
    usersPage: usersReducer,
});

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



export default store;