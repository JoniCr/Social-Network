import React from 'react';
import S from './NavBar.module.css';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
        <section className={`${S.navBar} parent`}>
            <nav className={S.nav}>
                <ul className={S.ul}>
                    <li className={S.elem}><NavLink to="/profile" activeClassName={S.activeLink}>Profile</NavLink></li>
                    <li className={S.elem}><NavLink to="/friends" activeClassName={S.activeLink}>Friends</NavLink></li>
                    <li className={S.elem}><NavLink to="/messages" activeClassName={S.activeLink}>Messages</NavLink></li>
                    <li className={S.elem}><NavLink to="/news" activeClassName={S.activeLink}>News</NavLink></li>
                    {/*<li className={S.elem}><NavLink to="/music">Music</NavLink></li>*/}
                    {/*<li className={S.elem}><NavLink to="/settings">Settings</NavLink></li>*/}
                    <li className={S.elem}><NavLink to="/users" activeClassName={S.activeLink}>All users</NavLink></li>
                </ul>
            </nav>
        </section>
    )

};


export default NavBar;