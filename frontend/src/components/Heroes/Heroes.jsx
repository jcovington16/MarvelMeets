import React, {useState} from 'react'
import NavBar from '../NavBar/NavBar';
import data from '../../config/Config';
import axios from 'axios';
import './Heroes.css';
import crypto from 'crypto-js';


const Heroes = ({user}) => {

    const [character, setCharacter] = useState('');
    const [characterInfo, setCharacterInfo] = useState('');

    const pk = data['public-key']
    const prk = data['private-key']
    const ts = 'thesoer'
    const url = 'https://gateway.marvel.com/v1/public/characters?'

    const hash = crypto.MD5(ts + prk + pk).toString()

    const handleHeroSearch = (e) => { 
        setCharacter(e.target.value);
    }

    const handleSearch = (e) => {
        e.preventDefault();
        axios.get(`${url}name=${character}&ts=${ts}&apikey=${pk}&hash=${hash}`)
            .then(res => {
                console.log(res.data)
                setCharacterInfo(res.data)
            })
    }



    return (
        <div>
            <div>
                <NavBar user={user}/>
            </div>

            {/* <div className="hero">
                <div className="hero__search__title">
                    <span>Search A Hero</span>
                    <div className="hero__search">
                        <form onSubmit={handleSearch} className="hero__form">
                            <input type="text" placeholder="Search" onChange={handleHeroSearch} value={character} />
                            <button type="submit">Search</button>
                        </form> 
                    </div>

                </div>
            </div> */}

            <div className="row mt-5">
                <div className="col-md-3"></div>
                <div className="col-md-6">

                    <form className="form-inline my-sm-0 input-group" onSubmit={handleSearch}>
                        <input className="form-control" type="search" placeholder="Search For Hero" value={character} onChange={handleHeroSearch}/>
                        <button className="btn btn-primary my-sm-0" type="submit">Search</button>
                    </form>

                </div>
                <div className="col-md-3"></div>
            </div>

            <div className="row">
                <div className="col-md-6">
                
                </div>
                <div className="col-md-6">

                </div>
            </div>



        </div>
    )
}

export default Heroes;
