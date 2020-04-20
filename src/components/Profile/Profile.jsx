import React from 'react';
import S from './Profile.module.css'; //styles import
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = props => {

    return (
        <section className={`${S.profile} parent`}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer store={props.store}/>
        </section>
    )

};


export default Profile;