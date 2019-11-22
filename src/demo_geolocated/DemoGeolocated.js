import React from "react";
import {geolocated} from "react-geolocated";
import Utils from "./Utils";
import {SAI_LOCATIONS} from "../commons/Defines";

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
                    <tr>
                        <td>latitude</td>
                        <td>{coords.latitude}</td>
                    </tr>
                    <tr>
                        <td>longitude</td>
                        <td>{coords.longitude}</td>
                    </tr>
                    {/* <tr>
                        <td>altitude</td>
                        <td>{coords.altitude}</td>
                    </tr>
                    <tr>
                        <td>heading</td>
                        <td>{coords.heading}</td>
                    </tr>
                    <tr>
                        <td>speed</td>
                        <td>{coords.speed}</td>
                    </tr> */}
                    <tr>
                        <td>distance to coffee bar:</td>
                        <td>{Utils.distance(coords.longitude, coords.latitude, SAI_LOCATIONS[0].long, SAI_LOCATIONS[0].lat)}</td>
                    </tr>
                    <tr>
                        <td>distance to elevator:</td>
                        <td>{Utils.distance(coords.longitude, coords.latitude, SAI_LOCATIONS[1].long, SAI_LOCATIONS[1].lat)}</td>
                    </tr>
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