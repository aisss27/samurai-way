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
}

export type DialogsPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
}


export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, I am Ais', likesCount: 777},
            {id: 2, message: 'New Iphone!!!', likesCount: 123},
            {id: 2, message: 'New Iphone!!!', likesCount: 27},
            {id: 2, message: 'New Iphone!!!', likesCount: 0},
        ],
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
}

export default state;