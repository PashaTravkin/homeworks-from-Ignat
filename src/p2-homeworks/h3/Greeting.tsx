import React, {ChangeEvent, ChangeEventHandler, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (set:ChangeEvent<HTMLInputElement>)=>void // need to fix any
    enterAdd:(set:KeyboardEvent<HTMLInputElement>) =>void
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    setName: (set:string)=>void
    disabled:boolean
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, enterAdd, addUser, error, totalUsers, setName, disabled} // деструктуризация пропсов
) => {
    const inputClass = error === 'Name is required!' ? s.error : s.someClass // need to fix with (?:)


    return (
        <div>
            <input value={name}
                   onChange={setNameCallback}
                   onKeyDown={enterAdd}
                   className={inputClass}/>
            <button className={s.buttonEdd} onClick={addUser} disabled ={disabled} >add</button>
            <span>{totalUsers}</span>
            <div className={s.titleError}>{error}</div>
        </div>
    )
}

export default Greeting
