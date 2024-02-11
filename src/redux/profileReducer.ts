import {DialogType, MessageType, PostType} from './store';

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
}



let initialState = {
    posts: [
        {id: 1, message: 'Hi, I am Ais', likesCount: 777},
        {id: 2, message: 'New Iphone!!!', likesCount: 123},
        {id: 3, message: 'New Iphone!!!', likesCount: 27},
        {id: 4, message: 'New Iphone!!!', likesCount: 0},
    ],
    newPostText: '',
};
export const profileReducer = (state: ProfilePageType = initialState, action: any) => {
    switch (action.type) {
        case ADD_POST :
            let newPost: PostType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 555
            }
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    }
}
