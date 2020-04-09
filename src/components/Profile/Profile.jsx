import React from 'react';
import S from './Profile.module.css'; //styles import
import MyPosts from './MyPosts/MyPosts';

const Profile = (props) => {
  return (
    <section className={`${S.profile} parent`}>
      <div className={S.about}>
        <div className={S.avatar}></div>
        <div className={S.description}>
          <h1 className={S.name}>Evgeniy Khristenko</h1>
          <p className={S.city}>City: <span className={S.answer}>Noviy Urengoy</span></p>
          <p className={S.job}>Job: <span className={S.answer}>Front-end Dev</span></p>
          <p className={S.education}>Education: <span className={S.answer}>No</span></p>
          <p className={S.site}>Web-site: <span className={S.answer}>https://DgoniCarter.com</span></p>
        </div>
      </div>
      <MyPosts />
    </section>
  )

};


export default Profile;