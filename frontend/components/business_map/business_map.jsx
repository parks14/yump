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
        // window.google = undefined;

        const initMap = () => {
            const map = new window.google.maps.Map(googleMapRef.current, mapOptions);

            businesses.map(business => {
                const { name, lat, long } = business;

                let marker = new window.google.maps.Marker({
                    position: {lat: lat, lng: long},
                    map,
                    // title: name,
                    animation: window.google.maps.Animation.DROP
                })

                map.setCenter({lat: businesses[0].lat, lng: businesses[0].long})
            })
        }

        initMap();
    }, [businesses]);

    return (
        <div className="map-container">
            <div className="map" ref={googleMapRef}>
            </div>
        </div>
        
    )
}

export default withRouter(BusinessMap);