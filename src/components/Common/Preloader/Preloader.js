import preloaderImg from "../../../assets/img/loader.svg";
import React from "react";

const Preloader = () => {
    return (
        <img alt='content is loading, please wait' src={preloaderImg}/>
    )
};

export default Preloader