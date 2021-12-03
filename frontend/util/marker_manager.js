class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
    }

    updateMarkers(businesses) {
        const businessesObj = {};
        businesses.forEach(businesses => businessesObj[business.id] = business);

        businesses
            .filter(business => !this.markers[business.id])
            .forEach(newBusiness => this.createMarker(newBusiness, this.handleClick))

        Object.keys(this.markers)
            .filter(businessId => !businessesObj[businessId])
            .forEach(businessId => this.removeMarker(this.markers[businessId]))
    }

    createMarker(business) {
        const position = new window.google.mapsLatLng(business.lat, business.lng);
        const marker = new window.google.maps.Marker({
            position,
            map: this.map,
            businessId: business.id
        });

        marker.addListener('click', () => this.handleClick(business));
        this.markers[marker.businessId] = marker;
    }

    removeMarker(marker) {
        this.markers[marker.businessId].setMap(null);
        delete this.markers[marker.businessId];
    }
}

export default MarkerManager;