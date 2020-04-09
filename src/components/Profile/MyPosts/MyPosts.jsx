import React from 'react';
import S from './MyPosts.module.css'; //styles import
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={S.my_posts}>
                <div className={S.write_post}>
                    <h2 className={S.write_post__title}>Write a post</h2>
                    <div className={S.textarea_wrapper}>
                    <textarea name="post" className={S.textarea} placeholder="What's new?"></textarea>
                    <button className={S.publish_btn}>Publish</button>
                    </div>
                </div>
                <div className={S.all_posts}>
                        <Post text="Hello it's me"/>

                </div>
        </div>
    )
};


export default MyPosts;