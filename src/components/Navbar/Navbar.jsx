import React from 'react';
import S from './Navbar.module.css'

const Navbar = () => {
    return (
        <section className={`${S.navbar} parent`}>
            <nav className={S.nav}>
                <ul className={S.ul}>
                    <li className={S.elem}><a href="#">Profile</a></li>
                    <li className={S.elem}><a href="#">Messages</a></li>
                    <li className={S.elem}><a href="#">News</a></li>
                    <li className={S.elem}><a href="#">Music</a></li>
                    <li className={S.elem}><a href="#">Settings</a></li>
                </ul>
            </nav>
        </section>
    );

}


export default Navbar;