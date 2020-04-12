import React from "react";
import S from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
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
    )
};

export default ProfileInfo;