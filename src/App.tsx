import React from 'react';
import './App.css';
import {Header} from './components/header/Header';
import {Navbar} from './components/navbar/Navbar';
import {Profile} from './components/profile/Profile';
import {Dialogs} from './components/dialogs/Dialogs';
import {Route} from 'react-router-dom';
import {News} from './components/news/News';
import {Music} from './components/music/Music';
import {Settings} from './components/settings/Settings';

import {RootStateType, StoreType} from './redux/state';


export type AppProps = {
   store: StoreType
    state:RootStateType
    // addPost: () => void
    // updateNewPostText: (newText:string) => void
    dispatch: (action: any) => void
    // newPostText: string
};


function App(props: AppProps) {
const state = props.store.getState();
    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path="/profile" render={() => <Profile
                        dispatch={props.store.dispatch.bind(props.store)}
                        profilePage={state.profilePage}
                    />}/>
                    <Route path="/dialogs" render={() => <Dialogs state={state.dialogsPage}/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                </div>
            </div>
    );
}

export default App;
