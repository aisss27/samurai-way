import {profileReducer} from './profileReducer';
import {dialogsReducer} from './dialogsReducer';

export type MessageType = {
    id: number
    message: string
}
export type DialogType = {
    id: number
    name: string
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
}

export type DialogsPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
    newMessageBody: string
}


export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void
    subscribe: (callback: () => void) => void
    getState: () => RootStateType
    dispatch: (action: any) => void
}

let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, I am Ais', likesCount: 777},
                {id: 2, message: 'New Iphone!!!', likesCount: 123},
                {id: 3, message: 'New Iphone!!!', likesCount: 27},
                {id: 4, message: 'New Iphone!!!', likesCount: 0},
            ],
            newPostText: '',
        },
        dialogsPage: {
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
        },
    },
    _callSubscriber() {
        console.log('State changed');
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },


    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber();
    }

}

export default store;