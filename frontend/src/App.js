import './App.css';
import React, {useEffect, useState} from 'react';
import {Routes, Switch, Route} from 'react-router-dom';
import mapboxgl from 'mapbox-gl';
import Map from './components/Map/Map';
import jwtDecode from 'jwt-decode';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import MainPage from './components/MainPage/MainPage';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Events from './components/Events/Events';
import Heroes from './components/Heroes/Heroes';


function App() {

  const [user, setUser] = useState('');

  useEffect(() => {
    const jwt = localStorage.getItem('token');

    try {
      const decode = jwtDecode(jwt);
      setUser(decode)

    } catch {

    }
  }, []);

  return (
    <div className="App">
      
      <Routes>
        {/* <Route path="/home" render={props => {
          if(user) {
            return <MainPage {...props} user={user} />
          } else {
            return <Route element={<Login/>}/>
          }
        }}
        /> */}
        <Route path="/home" element={<MainPage user={user} />} />
        <Route path='/register' element={<Register/>} />
        <Route path='/' exact element={<Login user={user}/>} />
        <Route path='/events' element={<Events user={user}/>} />
        <Route path='/heroes' element={<Heroes user={user}/>} />


      </Routes>
    </div>
  );
}

export default App;
