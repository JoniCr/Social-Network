import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import {BrowserRouter, Route} from 'react-router-dom';
import News from "./components/News/News";

const App = () => {
    return (
        <BrowserRouter>
            <div className="page-wrapper">
                <Header/>
                <div className="page-container">
                    <NavBar/>
                    <Route path='/profile' component={Profile} />
                    <Route path='/messages' component={Messages}/>
                    <Route path='/news' component={News}/>
                    {/*<Route path='/music' component={Music}/>*/}
                    {/*<Route path='/settings' component={Settings}/>*/}
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
