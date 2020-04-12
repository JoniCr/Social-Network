import React from "react";
import S from './../Messages.module.css'; //styles
import {NavLink} from 'react-router-dom';

const Message = (props) => {
    return (
        <li className={S.message}>
            <a href="#" className={S.message_header}>
                <img className={`${S.message_user_avatar} ${S.avatar} `}
                     src="https://im0-tub-ru.yandex.net/i?id=b92159f5b1315ee33202b84fd0e7ed78&n=13"
                     alt="Avatar"/>
                <span className={S.user_name}>Evgeniy Khristenko</span>
            </a>
            <div className={S.message_body}>
                {props.message}
            </div>
        </li>
    )
};

export default Message;