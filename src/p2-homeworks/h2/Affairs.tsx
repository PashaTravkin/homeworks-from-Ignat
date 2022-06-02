import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from "./Affairs.module.css";

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (value:FilterType)=> void
    deleteAffairCallback: (value:number)=> void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

        const setAll = () => {props.setFilter('all')}// need to fix
        const setHigh = () => {props.setFilter('high')}// need to fix
        const setMiddle = () => {props.setFilter('middle')}// need to fix
        const setLow = () => {props.setFilter('low')}// need to fix


    return (
        <div className={s.list}>

            {mappedAffairs}

            <button className={s.button} onClick={setAll}>All</button>
            <button className={s.button} onClick={setHigh}>High</button>
            <button className={s.button} onClick={setMiddle}>Middle</button>
            <button className={s.button} onClick={setLow}>Low</button>
        </div>
    )
}

export default Affairs
