import React, {ChangeEvent, ChangeEventHandler, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (set: ChangeEvent<HTMLInputElement>) => void // need to fix any
    enterAdd: (set: KeyboardEvent<HTMLInputElement>) => void
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    setName: (set: string) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, enterAdd, addUser, error, totalUsers, setName,} // деструктуризация пропсов
) => {
    const inputClass = error === 'Name is required!' ? s.error : s.someClass // need to fix with (?:)


    return (
        <div>
            <input value={name}
                   onChange={setNameCallback}
                   onKeyDown={enterAdd}
                   className={inputClass}
                   onBlur={setNameCallback}/>
            <button className={s.buttonEdd} onClick={addUser} disabled={!name}>add</button>
            <span>{totalUsers}</span>
            <div className={s.titleError}>{error}</div>
        </div>
    )
}

export default Greeting
