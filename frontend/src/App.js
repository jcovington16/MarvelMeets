import './App.css';
import React, {useEffect, useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import MainPage from './components/MainPage/MainPage';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import EventsCreate from './components/EventsCreate/EventCreate';
import Heroes from './components/Heroes/Heroes';
import Logout from './components/Logout/Logout';
import EventPage from './components/EventPage/EventPage';
import Profile from './components/Profile/Profile';


function App() {

  const [user, setUser] = useState('');

  useEffect(() => {
    const jwt = localStorage.getItem('token');

    try {
      const decode = jwtDecode(jwt);
      setUser(decode);

    } catch {

    }
  }, []);

  return (
    <div className="container-fluid">
      
      <Routes>

        <Route path="/home" element={<MainPage user={user} />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' exact element={<Login user={user}/>} />
        <Route path='/events' element={<EventsCreate user={user}/>} />
        <Route path='/heroes' element={<Heroes user={user}/>} />
        <Route path='/logout' element={<Logout/>} />
        <Route path='/event_page/:_id' element={<EventPage user={user}/>} />
        <Route path='/profile_page' element={<Profile user={user}/>} />

      </Routes>
    </div>
  );
}

export default App;
