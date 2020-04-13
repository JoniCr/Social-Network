import React from 'react';
import S from './Profile.module.css'; //styles import
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <section className={`${S.profile} parent`}>
            <ProfileInfo/>
            <MyPosts postsData={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     dispatch={props.dispatch}
            />
        </section>
    )

};


export default Profile;