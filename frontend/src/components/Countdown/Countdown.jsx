import React, {useState, useEffect} from 'react'
import {marvelMeets} from '../../api';

const Countdown = () => {

    const [mcumovie, setMCUMovie] = useState();
    //const [mcuDate, setMCUDate] = useState();

    useEffect(() => {
        marvelMeets.get('https://www.whenisthenextmcufilm.com/api')
            .then(res => {
                setMCUMovie(res.data);

                //setMCUDate(res.data.following_production.release_date)
            })
    }, [])


    // const calculateTimeLeft = () => {

    //     const difference = +new Date(mcuDate) - +new Date();

    //     let timeLeft = {};

    //     if (difference > 0) {
    //         timeLeft =  {
    //             days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    //             hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    //             minutes: Math.floor((difference / 1000 / 60) % 60),
    //             seconds: Math.floor((difference / 1000) % 60)
    //         };
    //     }

    //     return timeLeft;
    // }

    // const [timeLeft, setTimeLeft] =  useState(calculateTimeLeft());
    // console.log(timeLeft)

    // useEffect(() => {
    //     setTimeout(() => {
    //       setTimeLeft(calculateTimeLeft());
    //     }, 1000);
    // });

    // const timerComponents = [];

    // Object.keys(timeLeft).forEach((interval) => {
    //     if (!timeLeft[interval]) {
    //         return;
    //     }

    //     timerComponents.push(
    //         <span>
    //             {timeLeft[interval]} {interval}{" "}
    //         </span>
    //     );
    // });

    return (
        <div>
            <ul className="nav justify-content-center">
                {mcumovie && <li className="nav-item">
                    <h3>{mcumovie.following_production.title} releases in {mcumovie.following_production.days_until} days!</h3>
                    {/* {timerComponents.length ? `${timerComponents} untilf ${mcumovie.following_production.title} is released` : <span>{mcumovie.following_production.title} is out!!!</span>} */}
                </li>}
            </ul>  
        </div>
    )
}

export default Countdown;
