const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogues: [{name: 'Evgeniy', userId: 1}, {name: 'Nikita', userId: 2}],
    messages: [{id: 1, message: 'Hi'}, {id: 2, message: 'Hello'}],
    newMessageText: '',
};

const messagesReducer = (state = initialState, action) => {


    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: 2, message: state.newMessageText}],
                newMessageText: '',
            };

        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.text
            };

        default:
            return state;
    }

};

export const addMessageCreator = () => ({type: ADD_MESSAGE});

export const updateNewMessageTextCreator = (text) => (
    {type: UPDATE_NEW_MESSAGE_TEXT, text: text});

export default messagesReducer;