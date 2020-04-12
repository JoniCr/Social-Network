import React from "react";
import S from './../Messages.module.css'; //styles
import {NavLink} from 'react-router-dom';


const Dialogue = (props) => {
    return (
        <li className={S.dialogue}>
            <NavLink to={`messages/${props.userId}`} className={S.dialogue_link}>
                <img className={`${S.dialogue_user_avatar} ${S.avatar} `}
                     src="https://avatars.mds.yandex.net/get-pdb/1767376/0de9f39a-c664-4469-847a-df2c22b1cc16/s1200?webp=false"
                     alt="Avatar"/>
                <span className={S.dialogue_name}>{props.name}</span>
            </NavLink>
        </li>
    )
};

export default Dialogue;