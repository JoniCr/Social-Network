//Action types
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import sideBarReducer from "./sideBar-reducer";

//All data and methods of BLL
const store = {

    _state: {
        profilePage: {
            posts: [{id: 1, text: 'I just had breakfast'}, {id: 2, text: 'I am not stupid'}],
            newPostText: '',
        },
        messagesPage: {
            dialogues: [{name: 'Evgeniy', userId: 1}, {name: 'Nikita', userId: 2}],
            messages: [{id: 1, message: 'Hi'}, {id: 2, message: 'Hello'}],
            newMessageText: '',
        },
        sideBar: {}
    },
    _callSubscriber() {
        console.log('state changed')
    },
    getState: function () {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    //All methods for interacting with ui
    dispatch(action) {
        // reform the state
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.MessagesPage = messagesReducer(this._state.messagesPage, action);
        this._state.sideBarPage = sideBarReducer(this._state.sideBarPage, action);
        // rerender state with new data
        this._callSubscriber(this._state);
    }
};

window.store = store;

export default store;