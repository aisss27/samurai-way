import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let posts = [
    {id: 1, message: 'Hi, I am Ais', likesCount: 777},
    {id: 2, message: 'New Iphone!!!', likesCount: 123},
    {id: 2, message: 'New Iphone!!!', likesCount: 27},
    {id: 2, message: 'New Iphone!!!', likesCount: 0},
]

let dialogsData = [
    {id: 1, name: 'Ais'},
    {id: 2, name: 'Amina'},
    {id: 3, name: 'Arman'},
    {id: 4, name: 'Nurassem'},
    {id: 5, name: 'Nurs'},
    {id: 6, name: 'Ali'},
    {id: 7, name: 'Nurba'},
]

let messagesData = [
    {id:1, message: "Hi"},
    {id:2, message: "How are you?"},
    {id:3, message: "Yo"},
]

ReactDOM.render(
    <App posts={posts} dialogs={dialogsData} messages={messagesData}/>,
  document.getElementById('root')
);