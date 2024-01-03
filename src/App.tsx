import React from 'react';
import './App.css';
import {Header} from './components/header/Header';
import {Navbar} from './components/navbar/Navbar';
import {Profile} from './components/profile/Profile';
import {Dialog, Dialogs, Message} from './components/dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {News} from './components/news/News';
import {Music} from './components/music/Music';
import {Settings} from './components/settings/Settings';
import {PostType} from './components/profile/myPosts/MyPosts';

export type AppProps = {
    posts: PostType[]
    messages: Message[]
    dialogs: Dialog[]
}
function App(props: AppProps) {

  return (
      <BrowserRouter>
    <div className="app-wrapper">
        <Header/>
        <Navbar/>
        <div className={'app-wrapper-content'}>
           <Route path='/profile' render={() => <Profile posts={props.posts}/> }/>
           <Route path='/dialogs' render={() => <Dialogs dialogs={props.dialogs} messages={props.messages}/> }/>
           <Route path='/news' render={() => <News/> }/>
           <Route path='/music' render={() => <Music/> }/>
           <Route path='/settings' render={() => <Settings/> }/>
        </div>
    </div>
      </BrowserRouter>
  );
}

export default App;
