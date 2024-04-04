import {UserType} from './usersReducer';

export type PostType = {
    id: number
    message: string
    likesCount: number
}


const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'

export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
    profile: any
}


let initialState = {
    posts: [
        {id: 1, message: 'Hi, I am Ais', likesCount: 777},
        {id: 2, message: 'New Iphone!!!', likesCount: 123},
        {id: 3, message: 'New Iphone!!!', likesCount: 27},
        {id: 4, message: 'New Iphone!!!', likesCount: 0},
    ],
    newPostText: '',
    profile: null
};
export const profileReducer = (state: ProfilePageType = initialState, action: any) => {
    switch (action.type) {
        case ADD_POST : {
            let newPost: PostType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 555
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''

            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state, profile: action.profile
            }
        }
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

export const setUserProfile = (profile: UserType[]) => ({
    type: SET_USER_PROFILE, profile
})
