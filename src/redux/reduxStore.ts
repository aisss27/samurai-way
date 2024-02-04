import {combineReducers, createStore} from 'redux';
import {profileReducer} from './profileReducer';
import {dialogsReducer} from './dialogsReducer';



let reducers = combineReducers({
    profileReducer: profileReducer,
    dialogsReducer: dialogsReducer
})

export type AppRootStateType = ReturnType<typeof reducers>

export let store = createStore(reducers);