import './index.css';
import state, {subscribe} from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, RootStateType, updateNewPostext} from './redux/state';
import {BrowserRouter} from 'react-router-dom';

 let rerenderEntireTree = (state:RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App newPostText={state.profilePage.newPostText} state={state} addPost={addPost} updateNewPostText={updateNewPostext}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree(state);

 subscribe(rerenderEntireTree);
