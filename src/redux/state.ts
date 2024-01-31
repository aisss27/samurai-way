
let rerenderEntireTree = (state:RootStateType) => {
    console.log('State changed');
}

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
    addPost: (postMessage: string) => void
    updateNewPostText: (newText: string) => void
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

export let addPost = (newPostText: string) => {
    let newPost:PostType = {id: new Date().getTime(), message: newPostText, likesCount: 555}
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state)
}

export let updateNewPostext = (newText: string) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}

let state:RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, I am Ais', likesCount: 777},
            {id: 2, message: 'New Iphone!!!', likesCount: 123},
            {id: 3, message: 'New Iphone!!!', likesCount: 27},
            {id: 4, message: 'New Iphone!!!', likesCount: 0},
        ],
        newPostText: '',
        updateNewPostText: updateNewPostext,
        addPost: addPost,
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

export const subscribe = (observer:any) => {
        rerenderEntireTree = observer;
}



export default state;