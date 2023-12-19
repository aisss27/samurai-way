import React from 'react';
import s from './../Dialogs.module.css'





type MessageProps = {
    id: number
    message:string
}
export const Message = (props: MessageProps) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}
