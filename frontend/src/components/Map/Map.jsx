import React, { useRef, useEffect, useState }  from "react";
import mapboxgl from "mapbox-gl";
import './Map.css';
import data from '../../config/Config';
import axios from 'axios';


const Map = ({user}) => {

    mapboxgl.accessToken = data.mapBoxToken

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(0);
    const [lat, setLat] = useState(0);
    const [zoom, setZoom] = useState(9);

    useEffect(() => {
        //if (map.current) return; // initialize map only once
        axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${user.city}.json?access_token=${data.mapBoxToken}`)
            .then(res => {
                setLng(res.data.features[0].center[0])
                setLat(res.data.features[0].center[1])
            })
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });
    });

    useEffect(() => {
        if(!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    });

    return (
        <div>
            <div ref={mapContainer} className="map-container"/>
        </div>
    );
}

export default Map;