import React from 'react'
import {NavLink} from "react-router-dom";
import s from "./Heder.module.css"

function Header() {
    return (
        <div className={s.headerWrapper}>
            <button className={s.button}></button>
            <div className={s.links} >
                <div><NavLink className={s.link} to={'/pre-junior'}>PreJunior</NavLink></div>
                <div><NavLink className={s.link} to={'/junior'}>Junior</NavLink></div>
                <div><NavLink className={s.link} to={'/junior-plus'}>JuniorPlus</NavLink></div>
            </div>
            {/*// add NavLinks*/}

        </div>
    )
}

export default Header
