import React from "react";
import {addMessageCreator, updateNewMessageTextCreator} from "../../redux/messages-reducer";
import Messages from "./Messages";
import {connect} from "react-redux";


const mapStateToProps = (state) => ({messagesPage: state.messagesPage});


const mapDispatchToProps = (dispatch) => (
    {
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageTextCreator(text))
        },
        addMessage: () => {dispatch(addMessageCreator())}
    }
);

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;