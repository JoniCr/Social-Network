import React from "react";
import S from "./Messages.module.css"
import Message from "./Message/Message";
import Dialogue from "./Dialogue/Dialogue";
import {Redirect} from "react-router-dom";


const Messages = (props) => {
    const dialogueElements = props.messagesPage.dialogues.map(dialogue => <Dialogue userId={dialogue.userId}
                                                                       name={dialogue.name} key={dialogue.id}/>);

    const messageElements = props.messagesPage.messages.map(message => <Message key={message.id} message={message.message}/>);

    const onMessageTextChange = (e) => {
        const text = e.target.value;
        props.updateNewMessageText(text);
    };

    if(props.isAuth === false) {
        return <Redirect to='/login'/>
    }

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
                                value={props.messagesPage.newMessageText}
                            />

                            <button className={S.send_message}
                                    onClick={props.addMessage}>
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