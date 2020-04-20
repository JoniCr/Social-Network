import Styles from "./Users.module.css";
import userPhoto from "../../assets/img/unnamed.jpg";
import React from "react";
import {NavLink} from "react-router-dom";


const Users = props => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <section className="Users">
            {

                pages.map(page => {
                    return props.currentPage === page ?
                        <span className={`${Styles.selectedPage} ${Styles.pagination}`} key={page}
                              onClick={() => props.onPageChange(page)}>{page}</span> :
                        <span key={page} className={Styles.pagination}
                              onClick={() => props.onPageChange(page)}>{page}</span>
                })
            }

            {

                props.users.map(user => {
                    return (
                        <div className="user" key={user.id}>
                            <div className="img_wrapper">
                                <NavLink to={`/profile/${user.id}`}>
                                    <img className={Styles.img}
                                         src={user.photos.small !== null ? user.photos.small : userPhoto}
                                         alt="avatar"/>
                                </NavLink>
                            </div>
                            <div className="info">
                                <NavLink to={`/profile/${user.id}`}>
                                <span>{user.name}</span>
                                </NavLink>
                                <span>{"user.location.country"},{"user.location.city"}</span>
                                <span>{user.status}</span>
                            </div>
                            <div>
                                {user.isFollowed ? <button className="followed"
                                                           onClick={() => props.unfollow(user.id)}>Unfollow</button> :
                                    <button className="unfollowed"
                                            onClick={() => props.follow(user.id)}>Follow</button>}
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
};

export default Users;