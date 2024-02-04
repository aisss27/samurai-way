import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {DialogsPageType, StoreType} from '../../redux/store';
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from '../../redux/dialogsReducer';
import {AppRootStateType} from '../../redux/reduxStore';


type DialogsProps = {
    store: {
        dispatch: (action: any) => void;
        getState: () => { dialogsReducer: DialogsPageType };
    };
}
export const Dialogs = (props: DialogsProps) => {
    let state = props.store.getState().dialogsReducer;

    let dialogsElements = state.dialogs.map(dialog =>
        <DialogItem key={dialog.id} id={dialog.id} name={dialog.name}/>
    );


    let messagesElements = state.messages.map(message =>
        <Message key={message.id} id={message.id} message={message.message}/>
    );
    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator())
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value;
        props.store.dispatch(updateNewMessageBodyActionCreator(body))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder='enter your message'></textarea></div>
                    <div><button onClick={onSendMessageClick}>send</button></div>
                </div>
            </div>
        </div>
    );
};

