import React from 'react';

const Profile = () => {
  return (
    <div className="main parent">
      <section className="about">
        <div className="about__profile-img-wrapper">
          <img className="about__profile-img" src="https://avatars.mds.yandex.net/get-pdb/1366122/361691fe-68dc-481e-8c75-d3a49dfec35e/s1200?webp=false" alt="Profile image" />
        </div>
        <div className="about__info">
          <h1 className="about__name">Evgeniy Khristenko</h1>
          <div className="about__description about__status">Status: <span className="about__status-status">😁 I am happy 😁</span></div>
          <div className="about__description about__birth">Birthdate: <span className="about__birth-birth">27 February</span></div>
          <div className="about__description about__location">Location: <span className="about__location-location">Noviy Urengoy</span></div>
          <div className="about__description about__education">Education: <span className="about__education-education">Oxford</span></div>
        </div>
      </section>
      <section className="write-post">
        <h2 className="write-post__title">Write a post</h2>
        <textarea name="post-text" id="post-text" className="write-post__textarea"></textarea>
        <button className="write-post__send">Send</button>
      </section>
    </div>
  );

}


export default Profile;