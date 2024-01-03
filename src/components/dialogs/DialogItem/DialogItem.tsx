import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from 'react-router-dom';


export type DialogProps = {
    id: number
    name: string
}
export const DialogItem = (props: DialogProps) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={s.dialog}>
            <NavLink  to={path}>{props.name}</NavLink>
        </div>
    )
}

