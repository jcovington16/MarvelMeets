import React, {useState} from 'react'
import NavBar from '../NavBar/NavBar';
import data from '../../config/Config';
import marvelMeets from '../../api';
import './Heroes.css';
import crypto from 'crypto-js';


const Heroes = ({user}) => {

    const [character, setCharacter] = useState('');
    const [characterInfo, setCharacterInfo] = useState();
    const [characterComics, setCharacterComics] = useState();

    const pk = data['public-key']
    const prk = data['private-key']
    const ts = 'thesoer'
    const url = 'https://gateway.marvel.com/v1/public/characters?'
    const url2 = 'https://gateway.marvel.com/v1/public/characters/'

    const hash = crypto.MD5(ts + prk + pk).toString()

    const handleHeroSearch = (e) => { 
        setCharacter(e.target.value);
    }

    const handleSearch = (e) => {
        e.preventDefault();

            marvelMeets.get(`${url}name=${character}&ts=${ts}&apikey=${pk}&hash=${hash}`)
                .then(res => {
                    
                    try {
                        setCharacterInfo(res.data.data.results[0])
                        const id = res.data.data.results[0].id
                        marvelMeets.get(`${url2}${id}/comics?limit=15&ts=${ts}&apikey=${pk}&hash=${hash}`)
                            .then(res => {
                                setCharacterComics(res.data.data.results)
                            })
                    } catch (err) {
                        alert('Hero Not Found. Try Again')
                    }

                })

    }

    return (
        <div>
            <div>
                <NavBar user={user}/>
            </div>

            <div className="row mt-5">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                <h2>Search Your Favorite Hero</h2>

                    <form className="form-inline my-sm-0 input-group" onSubmit={handleSearch}>
                        <input className="form-control" type="search" placeholder="Search For Hero" value={character} onChange={handleHeroSearch}/>
                        <button className="btn btn-primary my-sm-0" type="submit">Search</button>
                    </form>

                </div>
                <div className="col-md-3"></div>
            </div>

            {characterInfo && <div>
                <div className="row mt-5">
                    <div className="col-md-6">
                        <img src={`${characterInfo.thumbnail.path}.${characterInfo.thumbnail.extension}`} alt="Hero Pic" />
                    </div>

                    <div className="col-md-6 border border-primary" >
                        <p >{characterInfo.description}</p>
                    </div>
                </div>
                
                {characterComics &&<div className="row mt-5">

                    <div className="col-md-4">
                        <div className="card" style={{width: '30rem'}}>
                            <img src={`${characterComics[0].images[0].path}.${characterComics[0].images[0].extension}`} className="card-img-top" alt="Comic Pic"/>
                            <div className="card-body">
                                <h5 className="card-title">{characterComics[0].title}</h5>
                                <p className="card-text">{characterComics[0].description}</p>
                                <a href={characterComics[0].urls[0].url} className="btn btn-primary">See Comic Book</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card" style={{width: '30rem'}}>
                            <img src={`${characterComics[2].images[0].path}.${characterComics[2].images[0].extension}`} className="card-img-top" alt="Comic Pic"/>
                            <div className="card-body">
                                <h5 className="card-title">{characterComics[2].title}</h5>
                                <p className="card-text">{characterComics[2].description}</p>
                                <a href={characterComics[2].urls[0].url} className="btn btn-primary">See Comic Book</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card" style={{width: '30rem'}}>
                            <img src={`${characterComics[9].images[0].path}.${characterComics[9].images[0].extension}`} className="card-img-top" alt="Comic Pic"/>
                            <div className="card-body">
                                <h5 className="card-title">{characterComics[9].title}</h5>
                                <p className="card-text">{characterComics[9].description}</p>
                                <a href={characterComics[9].urls[0].url} className="btn btn-primary">See Comic Book</a>
                            </div>
                        </div>
                    </div>

                </div>}
            </div>}

        </div>
    )
}

export default Heroes;
