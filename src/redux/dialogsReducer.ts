import { DialogType, MessageType} from './store';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

export type DialogsPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
    newMessageBody: string
}

let initialState = {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Yo'},
        ],
        dialogs: [
            {id: 1, name: 'Ais'},
            {id: 2, name: 'Amina'},
            {id: 3, name: 'Arman'},
            {id: 4, name: 'Nurassem'},
            {id: 5, name: 'Nurs'},
            {id: 6, name: 'Ali'},
            {id: 7, name: 'Nurba'},
        ],
        newMessageBody: '',
    };
export const dialogsReducer = (state: DialogsPageType = initialState, action: any) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body});
            return state
        default:
            return state
    }
}

export const updateNewMessageBodyActionCreator = (body: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        body: body
    }
};

export const sendMessageActionCreator = () => ({type: 'SEND-MESSAGE'});