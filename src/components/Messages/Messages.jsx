import React from "react";
import S from "./Messages.module.css"
import {NavLink} from "react-router-dom";
import Message from "./Message/Message";
import Dialogue from "./Dialogue/Dialogue";


const Messages = (props) => {

    const dialogueElements = props.state.dialogues.map(dialogue => <Dialogue userId={dialogue.userId} name={dialogue.name}/>);
    const messageElements = props.state.messages.map(message => <Message message={message.message}/>);
const newMessage = React.createRef();

const callback = () => {
    const text = newMessage.current.value;
    alert(text)
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
                            <textarea placeholder="write a message" ref={newMessage}></textarea>
                            <button className={S.send_message} onClick={callback}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Messages;