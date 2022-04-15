import React, { useRef, useEffect, useState }  from "react";
import mapboxgl from "mapbox-gl";
import './Map.css';
import data from '../../config/Config';
import {marvelMeets} from '../../api';

// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

const Map = ({user}) => {

    mapboxgl.accessToken = data.mapBoxToken

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(0);
    const [lat, setLat] = useState(0);
    const [zoom] = useState(9);

    // const [events, setEvents] = useState();
    // const [longLats, setLongLats] = useState([]);



    useEffect(() => {

        marvelMeets.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${user.city}.json?access_token=${data.mapBoxToken}`)
            .then(res => {
                setLng(res.data.features[0].center[0])
                setLat(res.data.features[0].center[1])
            })
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom
        });

        // if(longLats.length >= 1) {
        //     const marker = new mapboxgl.Marker()
        //     marker.setLngLat([parseInt(longLats[1].lng), parseInt(longLats[1].lat)])
        //     marker.addTo(map);
        // }

    

    }, [lat,lng, user.city, zoom]);

    // useEffect(() => {
    //     marvelMeets.get('/api/events/')
    //         .then(res => {
    //             console.log(res.data)
    //             setLongLats(res.data)
    //         })

    // }, [])



    return (
        <div>
            <div ref={mapContainer} className="map-container"/>
        </div>
    );
}

export default Map;