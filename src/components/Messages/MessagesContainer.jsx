import React from "react";
import {addMessageCreator, updateNewMessageTextCreator} from "../../redux/messages-reducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";


const mapStateToProps = (state) => ({messagesPage: state.messagesPage});


const mapDispatchToProps = (dispatch) => ({
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageTextCreator(text))
        },
        addMessage: () => {dispatch(addMessageCreator())}
    }
);

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Messages);