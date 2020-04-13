import React from "react";
import S from "./Messages.module.css"
import Message from "./Message/Message";
import Dialogue from "./Dialogue/Dialogue";
import {addMessageCreator, updateNewMessageTextCreator} from "../../redux/messages-reducer";


const Messages = (props) => {
    const dialogueElements = props.state.dialogues.map(dialogue => <Dialogue userId={dialogue.userId}
                                                                             name={dialogue.name}/>);
    const messageElements = props.state.messages.map(message => <Message message={message.message}/>);

    const onMessageTextChange = (e) => {
        const text = e.target.value;
        props.dispatch(updateNewMessageTextCreator(text));
    };

    const onSendMessageClick = () => {
        props.dispatch(addMessageCreator());
    };

    return (
        <section className={`${S.messages} parent`}>
            <div className={S.messages_wrapper}>
                <div className={S.dialogues_side}>
                    <ul className={S.dialogues_list}>
                        {dialogueElements}
                    </ul>
                </div>
                <div className={S.messages_side}>
                    <div className={S.messages_side_wrapper}>
                        <ul className={S.messages_list}>
                            {messageElements}
                        </ul>
                        <div className={S.write_message}>
                            <textarea
                                onChange={onMessageTextChange}
                                value={props.state.newMessageText}
                            />

                            <button className={S.send_message}
                                    onClick={onSendMessageClick}>
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Messages;