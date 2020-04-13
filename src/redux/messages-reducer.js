const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const messagesReducer = (state, action) => {


    switch (action.type) {
        case ADD_MESSAGE:
            const message = {id: 2, message: state.newMessageText};
            state.messages.push(message);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.text;
            return state;
        default:
            return state;
    }

};

export const addMessageCreator = () => ({type: ADD_MESSAGE});

export const updateNewMessageTextCreator = (text) => (
    {type: UPDATE_NEW_MESSAGE_TEXT, text: text});

export default messagesReducer;