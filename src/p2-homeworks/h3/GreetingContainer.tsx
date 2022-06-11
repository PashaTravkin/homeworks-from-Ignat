import React, {ChangeEvent, ChangeEventHandler, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (value: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any
    const [disabled, setDisabled] = useState<boolean>(false)

    const addUser = () => {
        addUserCallback(name)
        alert('Hallo dear ' + name + ' !!!') // need to fix
        setName('')
    }

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        let meaning = e.currentTarget.value.trim()
        if (meaning) {
            setName(meaning)
            setError('')
            setDisabled(false)
        } else {
            setError('Name is required!')
            setDisabled(true)
        }     // need to fix
    }

    const enterAdd = (e: KeyboardEvent<HTMLInputElement>) => {
        if (name.trim() !== '') {
            if (e.key === 'Enter') {
                addUser()
                setName(' ')
            }
        }
    }

    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            setName={setName}
            disabled={disabled}
            enterAdd={enterAdd}
        />
    )
}

export default GreetingContainer
