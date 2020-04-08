import React from 'react';
import S from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={S.my_posts}>
                <div className={S.write_post}>
                    <h2 className={S.write_post__title}>Write a post</h2>
                    <textarea name="post"></textarea>
                    <button>Publish</button>
                </div>
                <div className={S.all_posts}>
                        <Post text="Hello it's me"/>
                        <Post text="Hello my second post"/>
                </div>
        </div>
    );    
}


export default MyPosts;