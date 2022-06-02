import React from 'react'
import {AffairType} from "./HW2";
import s from "../h2/Affairs.module.css"

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (value:number)=>void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}// need to fix

    return (
        <div className={s.wrapper}>
            <span className={s.item_1}>{props.affair.name}</span>
            <span className={s.item_2}>{props.affair.priority}</span>
            <button className={s.item_3}  onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
