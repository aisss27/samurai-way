import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';

export const Dialogs = () => {
    let dialogsData = [
        {id: 1, name: 'Ais'},
        {id: 2, name: 'Amina'},
        {id: 3, name: 'Arman'},
        {id: 4, name: 'Nurassem'},
        {id: 5, name: 'Nurs'},
        {id: 6, name: 'Ali'},
        {id: 7, name: 'Nurba'},
    ]

    let dialogsElements = dialogsData.map(dialog =>
         <DialogItem key={dialog.id} id={dialog.id} name={dialog.name}/>
    );

    let messagesData = [
        {id:1, message: "Hi"},
        {id:2, message: "How are you?"},
        {id:3, message: "Yo"},
    ]

   let  messagesElements = messagesData.map(message =>
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

