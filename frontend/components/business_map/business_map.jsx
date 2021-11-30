import React , { useRef, useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import { withRouter } from "react-router-dom";

const BusinessMap = () => {
    // const [map, setMap] = useState(null);
    const googleMapRef = useRef();

    const mapOptions = {
        center: {
            lat: 40.7477, 
            lng: -73.9869
        },
        zoom: 15
    };

    useEffect(() => {
        const map = new window.google.maps.Map(googleMapRef.current, mapOptions);

    }, []);

    return (
        <div className="map-container">
            <div className="map" ref={googleMapRef}>
            </div>
        </div>
        
    )
}

export default withRouter(BusinessMap);