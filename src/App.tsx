import React from 'react';
import './App.css';
import {Header} from './components/header/Header';
import {Navbar} from './components/navbar/Navbar';
import {Profile} from './components/profile/Profile';
import {Route} from 'react-router-dom';
import {News} from './components/news/News';
import {Music} from './components/music/Music';
import {Settings} from './components/settings/Settings';
import DialogsContainer from './components/dialogs/DialogsContainer';
import {UsersUnused} from './components/users/UsersUnused';
import UsersContainer from './components/users/UsersContainer';






export type AppProps = {


    // addPost: () => void
    // updateNewPostText: (newText:string) => void
    // newPostText: string
};


function App(props: AppProps) {

    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path="/profile" render={() => <Profile
                    />}/>
                    <Route path="/dialogs" render={() => <DialogsContainer />}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                </div>
            </div>
    );
}

export default App;
