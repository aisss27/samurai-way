import './index.css';
import {AppRootStateType, store} from './redux/reduxStore';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';



 let rerenderEntireTree = (state:AppRootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState());
store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
});



