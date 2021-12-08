import React , { useRef, useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import { withRouter } from "react-router-dom";

const BusinessMap = ({ businesses }) => {
    const googleMapRef = useRef();

    const mapOptions = {
        center: {
            lat: 40.7477, 
            lng: -73.9869
        },
        zoom: 14
    };

    useEffect(() => {
        const initMap = () => {
            const map = new window.google.maps.Map(googleMapRef.current, mapOptions);

            businesses.map(business => {
                const { id, name, lat, long, category, photoUrls } = business;
                const index = (businesses.indexOf(business) + 1).toString();

                let marker = new window.google.maps.Marker({
                    position: {lat: lat, lng: long},
                    map,
                    label: index,
                    animation: window.google.maps.Animation.DROP
                })

                let infoWindow = new window.google.maps.InfoWindow();

                const contentInfo =
                    '<div id="info-container"><div><img className="marker-photo" src=' + 
                    photoUrls[0] + 
                    '/><h1>' + 
                    name + 
                    '</h1><div id="label-category">' +
                    category +
                    '</div></div>';                

                marker.addListener("mouseover", (() => {
                    infoWindow.setContent(
                        contentInfo
                    );
                    infoWindow.open(map, marker);
                }))

                marker.addListener('mouseout', (() => {
                    infoWindow.close(map, marker);
                }))

                 marker.addListener('click', (() => {
                    window.location.href = `#/businesses/${id}`;
                }))

                map.setCenter({lat: businesses[0].lat, lng: businesses[0].long})
            })
        }

        initMap();
    }, [businesses]);

    if (!window.google) {
        return null
    } else {
        return (
            <div className="map-container">
                <div className="map" ref={googleMapRef}>
                </div>
            </div>
        )
    }
}

export default withRouter(BusinessMap);