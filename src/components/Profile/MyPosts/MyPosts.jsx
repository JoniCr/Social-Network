import React from 'react';
import S from './MyPosts.module.css'; //styles import
import Post from './Post/Post';

const MyPosts = (props) => {

    const postsArr = props.postsData.map(post => <Post text={post.text}/>);
    const postElem = React.createRef();

    const addNewPost = () => {
        props.addPost();
    };

    const onPostTextChange = () => {
        const text = postElem.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={S.my_posts}>
            <div className={S.write_post}>
                <h2 className={S.write_post__title}>Write a post</h2>
                <div className={S.textarea_wrapper}>
                    <textarea onChange={onPostTextChange} value={props.newPostText} name="post" className={S.textarea} placeholder="What's new?" ref={postElem}/>
                    <button className={S.publish_btn} onClick={addNewPost}>Publish</button>
                </div>
            </div>
            <div className={S.all_posts}>
                {postsArr}

            </div>
        </div>
    )
};


export default MyPosts;