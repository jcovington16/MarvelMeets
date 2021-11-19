import React, {useState, useEffect} from 'react'
import axios from 'axios';

const Countdown = () => {

    const [mcumovie, setMCUMovie] = useState();
    const [mcuDate, setMCUDate] = useState();

    useEffect(() => {
        axios.get('https://www.whenisthenextmcufilm.com/api')
            .then(res => {
                setMCUMovie(res.data);
                const date = new Date(res.data.following_production.release_date).getTime()
                setMCUDate(date)
            })
    })

    const count = setInterval(() => {
        const now = new Date().getTime();
        const timer = mcuDate - now;

        let days = Math.floor(timer / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let min = Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60));
        let sec = Math.floor((timer % (1000 * 60)) / 1000);

        let results = `${days}d ${hours}h ${min}m ${sec}s`

        if (timer < 0) {
            clearInterval(count)
        }

        return results
    })

    return (
        <div>
            <ul className="nav justify-content-center">
                {mcumovie && <li className="nav-item">
                    <h3>{mcumovie.following_production.title} releases in {mcumovie.following_production.days_until} days!</h3>
                </li>}
            </ul>  
        </div>
    )
}

export default Countdown;
