import React , { useRef, useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import { withRouter } from "react-router-dom";
import MarkerManager from "../../util/marker_manager";

const BusinessMap = ({ businesses }) => {
    // console.log(businesses)
    // const [map, setMap] = useState();
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
        // const markerManager = new MarkerManager(map);
        // markerManager.updateMarkers(businesses);
        console.log(businesses)
    }, [businesses]);

    return (
        <div className="map-container">
            <div className="map" ref={googleMapRef}>
            </div>
        </div>
        
    )
}

export default withRouter(BusinessMap);