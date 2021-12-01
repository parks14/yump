import React , { useRef, useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import { withRouter } from "react-router-dom";
import MarkerManager from "../../util/marker_manager";

const BusinessMap = ({ businesses }) => {
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
        const markerManager = new MarkerManager(map);
        markerManager.updateMarkers(businesses);
    }, []);

    // registerListeners() {
    //     window.google.maps.event.addListener(map, 'idle', () => {
    //         const { north, south, east, west } = map.getBounds().JSON();
    //         const bounds = {
    //             northEast: { lat: north, lng: east },
    //             southWest: { lat: south, lng: west}
    //         };
    //         updateFilter('bounds', bounds)
    //     })
    // }

    return (
        <div className="map-container">
            <div className="map" ref={googleMapRef}>
            </div>
        </div>
        
    )
}

export default withRouter(BusinessMap);