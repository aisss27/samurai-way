

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
}


export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type StoreType = {
    _state: RootStateType
    updateNewPostText: (newText: string) => void
    addPost: (newPostText: string) => void
    _callSubscriber: () => void
    subscribe: (callback: any) => void
    getState: () => RootStateType
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
                {id:1, message: "Hi"},
                {id:2, message: "How are you?"},
                {id:3, message: "Yo"},
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
        },
    },
    addPost(newPostText: string){
        let newPost:PostType = {id: new Date().getTime(), message: this._state.profilePage.newPostText, likesCount: 555}
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber()
    },
    updateNewPostText(newText: string){
        this._state.profilePage.newPostText = newText;
        this._callSubscriber();
    },
    _callSubscriber(){
        console.log('State changed');
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },
    getState(){
        return this._state;
    },
}



export default store;