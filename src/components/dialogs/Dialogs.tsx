import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {DialogType, MessageType} from '../../redux/state';


type DialogsProps = {
    state: {
        dialogs: DialogType[],
        messages: MessageType[]
    }
}
export const Dialogs = (props: DialogsProps) => {


    let dialogsElements = props.state.dialogs.map(dialog =>
        <DialogItem key={dialog.id} id={dialog.id} name={dialog.name}/>
    );


    let messagesElements = props.state.messages.map(message =>
        <Message key={message.id} id={message.id} message={message.message}/>
    );
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

