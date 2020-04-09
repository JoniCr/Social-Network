import React from 'react';
import S from './Post.module.css'; //styles
import {NavLink} from 'react-router-dom';

const Post = (props) => {
    return (
        <div className={S.post}>
            <div className={S.post_header}>
                <div className={S.avatar_mini_wrapper}>
                <img src="https://im0-tub-ru.yandex.net/i?id=b92159f5b1315ee33202b84fd0e7ed78&n=13" alt="Avatar"
                     className={S.avatar_mini}/>
                </div>
                <div className={S.post_header__text}>
                    <NavLink to="/profile" className={S.user__name}>Evgeniy Khristenko</NavLink>
                    <span className={S.post_date}>09.04.2020</span>
                </div>
            </div>
            <div className={S.post_body}>
                {props.text}
            </div>
        </div>
    )
};


export default Post;