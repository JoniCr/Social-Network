import React from 'react';
import S from './MyPosts.module.css'; //styles import
import Post from './Post/Post';


const MyPosts = (props) => {
    const postsArr = props.profilePage.posts.map(post => <Post text={post.text} key={post.id}/>);

    const onPostTextChange = e => {
        const text = e.target.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={S.my_posts}>
            <div className={S.write_post}>
                <h2 className={S.write_post__title}>Write a post</h2>
                <div className={S.textarea_wrapper}>
                    <textarea onChange={onPostTextChange} value={props.newPostText} name="post" className={S.textarea}
                              placeholder="What's new?"/>
                    <button className={S.publish_btn} onClick={props.addPost}>Publish</button>
                </div>
            </div>
            <div className={S.all_posts}>
                {postsArr}

            </div>
        </div>
    )
};


export default MyPosts;