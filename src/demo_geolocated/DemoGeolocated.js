import React from "react";
import {geolocated} from "react-geolocated";
import Utils from "./Utils";
import {DUBAI_LOCATIONS} from "../commons/Defines";
import LocationDistance from "./LocationDistance";

class Demo extends React.Component {
    render() {
        const {coords} = this.props;

        return !this.props.isGeolocationAvailable ? (
            <div>Your browser does not support Geolocation</div>
        ) : !this.props.isGeolocationEnabled ? (
            <div>Geolocation is not enabled</div>
        ) : coords ? (
            <table>
                <tbody>
                    {
                        DUBAI_LOCATIONS.map((location) => {
                            let distance = coords && Utils.distance(coords.longitude, coords.latitude, location.long, location.lat)
                            return <LocationDistance name={location.name} distance={distance} />
                        })
                    }

                </tbody>
            </table>
        ) : (
                        <div>Getting the location data&hellip; </div>
                    );
    }
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: true,
    },
    watchPosition: true,
    userDecisionTimeout: 500,
})(Demo);