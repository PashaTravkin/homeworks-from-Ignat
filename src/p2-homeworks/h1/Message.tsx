import React from 'react'
import "./Message_module.css"

type MessageTypeProps ={
    avatar: string,
    name: string,
    message: string,
    time: string,
}
function Message(props:MessageTypeProps) {
    return (
        <>
            <div className='wrapper'>
                <div className={"triangle-bottomright"}></div>
                <div className="ava"><img src={props.avatar}/></div>
                <div className="info">
                    <div className="name">{props.name} </div>
                    <div className="question">{props.message}</div>
                    <div className="time"><div>{props.time}</div></div>
                </div>
            </div>

        </>
    )
}

export default Message
