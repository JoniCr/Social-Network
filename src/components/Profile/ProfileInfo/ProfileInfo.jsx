import React from "react";
import S from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";

const ProfileInfo = props => {
    if(!props.profile) {
        return <Preloader/>
    } else {
        return (
            <div className={S.about}>
                <div className={S.avatar}>
                    <img src={props.profile.photos.large} className={S.avatar_img} alt=""/>
                </div>
                <div className={S.description}>
                    <h1 className={S.name}>{props.profile.fullName}</h1>
                    <p className={S.city}>City: <span className={S.answer}>Noviy Urengoy</span></p>
                    <p className={S.job}>Job: <span className={S.answer}>Front-end Dev</span></p>
                    <p className={S.education}>Education: <span className={S.answer}>No</span></p>
                    <p className={S.site}>Web-site: <span className={S.answer}>https://DgoniCarter.com</span></p>
                </div>
            </div>
        )
    }

};

export default ProfileInfo;