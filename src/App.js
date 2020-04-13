import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import {Route} from 'react-router-dom';
import News from "./components/News/News";
import Music from "./components/Music/Music";

const App = (props) => {
    return (
            <div className="page-wrapper">
                <Header/>
                <div className="page-container">
                    <NavBar/>
                    <Route path='/profile' render={() => <Profile
                        profilePage={props.state.profilePage}
                        dispatch={props.dispatch}
                    />}/>

                    <Route path='/messages' render={() => <Messages
                        state={props.state.messagesPage}
                        dispatch={props.dispatch}
                    />}/>

                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                </div>
            </div>
    )
};

export default App;
