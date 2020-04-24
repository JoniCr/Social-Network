import React from 'react';
import S from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = props => {
    return (
        <section className={`${S.header} parent`}>
            <div className={S.header__wrapper}>
                <img className={S.logo} src="https://cs6.pikabu.ru/post_img/big/2015/08/04/8/1438696581_1674031880.png"
                     alt="Presents"/>
                <div className={S.auth_block}> {props.isAuthorised === true ? <span>{props.login}</span> :
                    <NavLink to='/login'>Login</NavLink>}</div>
            </div>
        </section>
    );
};


export default Header;