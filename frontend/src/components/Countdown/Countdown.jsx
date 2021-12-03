import React, {useState, useEffect} from 'react'
import axios from 'axios';

const Countdown = () => {

    const [mcumovie, setMCUMovie] = useState();
    const [mcuDate, setMCUDate] = useState();
    //const [timeLeft, setTimeLeft] = useState();

    useEffect(() => {
        axios.get('https://www.whenisthenextmcufilm.com/api')
            .then(res => {
                setMCUMovie(res.data);
                const date = new Date(res.data.following_production.release_date).toGMTString()
                setMCUDate(date)
            })
    }, [])

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setTimeLeft(count);
    //     }, 1000);
    //     return () => clearTimeout(timer);
    // },);

    // const count = setInterval(() => {
    //     let now = new Date().getDate();
    //     let timer = mcuDate - now;
    //     let timeLeft = {};

    //     if (timer < 0) {
    //         timeLeft = {
    //             days: Math.floor(timer / (1000 * 60 * 60 * 24)),
    //             hours: Math.floor((timer / (1000 * 60 * 60)) % 24),
    //             min: Math.floor((timer / 1000 / 60) % 60),
    //             sec: Math.floor((timer / 1000) % 60),
                
    //         }
    //         // let results = `${days}d ${hours}h ${min}m ${sec}s`
    //     }
    //     return timeLeft
    // })

    return (
        <div>
            <ul className="nav justify-content-center">
                {mcumovie && <li className="nav-item">
                    <h3>{mcumovie.following_production.title} releases in {mcumovie.following_production.days_until} days!</h3>
                    {mcuDate}
                </li>}
            </ul>  
        </div>
    )
}

export default Countdown;
