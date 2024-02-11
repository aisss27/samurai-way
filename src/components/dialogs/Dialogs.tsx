import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {DialogsPageType} from '../../redux/dialogsReducer';
import {store} from '../../redux/reduxStore';



type DialogsProps = {
    sendMessage: () => void
    updateNewMessageBody: (body: string) => void
    dialogsPage: DialogsPageType
}
export const Dialogs = (props: DialogsProps) => {

    let dialogsElements = props.dialogsPage.dialogs.map(dialog =>
        <DialogItem key={dialog.id} id={dialog.id} name={dialog.name}/>
    );

    let messagesElements = props.dialogsPage.messages.map(message =>
        <Message key={message.id} id={message.id} message={message.message}/>
    );
    let newMessageBody = props.dialogsPage.newMessageBody

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody} onChange={onNewMessageChange} placeholder="enter your message"></textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}