import Styles from "./Users.module.css";
import userPhoto from "../../assets/img/unnamed.jpg";
import React from "react";
import {NavLink} from "react-router-dom";


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
            alert('There is no more users)')
        } else {
            chosenPage += 1;
            props.onPageChange(chosenPage);
        }
    };

    return (
        <section className="Users">

            <div>
                <img className={`${Styles.arrow_img} ${Styles.arrow_left}`} onClick={onPageLess}
                     src="https://image.flaticon.com/icons/svg/271/271228.svg" alt="arrow left"/>
                <span>{page}</span>
                <img className={Styles.arrow_img} onClick={onPageNext}
                     src="https://image.flaticon.com/icons/svg/271/271228.svg" alt="arrow left"/>
            </div>


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