import Styles from "./Users.module.css";
import userPhoto from "../../assets/img/unnamed.jpg";
import React from "react";
import {NavLink} from "react-router-dom";
import arrow from '../../assets/img/arrow.svg';


const Users = props => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const page = props.currentPage;
    let chosenPage = page;

    const onPageLess = () => {
        if (chosenPage === 1) {
            return false
        } else {
            chosenPage -= 1;
            props.onPageChange(chosenPage);
        }
    };

    const onPageNext = () => {
        if (chosenPage === pagesCount) {
            alert('There is no more users');
            return false
        } else {
            chosenPage += 1;
            props.onPageChange(chosenPage);
        }
    };

    return (
        <section className={`${Styles.users} parent`}>

            {

                props.users.map(user => {
                    return (
                        <div className={Styles.user} key={user.id}>
                            <div className={Styles.img_wrapper}>
                                <NavLink to={`/profile/${user.id}`}>
                                    <img className={Styles.img}
                                         src={user.photos.small !== null ? user.photos.small : userPhoto}
                                         alt="avatar"/>
                                </NavLink>
                            </div>
                            <div className={Styles.info}>
                                <NavLink to={`/profile/${user.id}`}>
                                    <span>{user.name}</span>
                                </NavLink>

                                <div className={Styles.btn_wrapper}>
                                    {user.followed ? <button disabled={props.isFollowingInProgress.some(userId => userId === user.id)}
                                                             className={`${Styles.followed} ${Styles.btn}`}
                                                             onClick={() => {
                                                                 props.unfollow(user.id)
                                                             }}>Unfollow</button> :
                                        <button disabled={props.isFollowingInProgress.some(userId => userId === user.id)}
                                                className={`${Styles.unfollowed} ${Styles.btn} `}
                                                onClick={() => {
                                                    props.follow(user.id)
                                                }
                                                }>Follow</button>}
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            <div className={Styles.pagination}>
                <div className={Styles.pagination_wrapper}>
                    <img className={`${Styles.arrow_img} ${Styles.arrow_left}`} onClick={onPageLess}
                         src={arrow} alt="arrow left"/>
                    <span className={Styles.pageNum}>{page}</span>
                    <img className={`${Styles.arrow_img} ${Styles.arrow_right}`} onClick={onPageNext}
                         src={arrow} alt="arrow left"/>
                </div>
            </div>
        </section>
    )
};

export default Users;