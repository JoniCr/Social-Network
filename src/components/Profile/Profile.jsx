import React from 'react';
import S from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = (props) => {
  return (
    <section className={`${S.profile} parent`}>
      <div className={S.about}>
        <div className={S.avatar}></div>
        <div className={S.description}>
          <h1 className={S.name}>{props.name}</h1>
          <p className={S.city}>City: <span>Noviy Urengoy</span></p>
          <p className={S.job}>Job: <span>Front-end Dev</span></p>
          <p className={S.education}>Education: <span>No</span></p>
          <p className={S.site}>Web-site: <span>https://DgoniCarter.com</span></p>
        </div>
      </div>
      <MyPosts />
    </section>
  );

}


export default Profile;