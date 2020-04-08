import React from 'react';
import S from './Post.module.css';

const Post = (props) => {
    return (
        <div className={S.post}>
            <div className={S.post__header}>
                <img src="https://im0-tub-ru.yandex.net/i?id=b92159f5b1315ee33202b84fd0e7ed78&n=13" alt="Avatar" className={S.avatar_mini} />
                <a href="#" className={S.user__name}>Evgeniy Khristenko</a>
            </div>
            <div className={S.post__body}>
                {props.text}
            </div>
        </div>
    );
}


export default Post;