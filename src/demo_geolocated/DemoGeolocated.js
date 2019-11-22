import React from "react";
import {geolocated} from "react-geolocated";
import {DUBAI_LOCATIONS} from "../commons/Defines";
import LocationDistance from "./LocationDistance";

import './LocationDistance.css';

class Demo extends React.Component {
    render() {
        const {coords} = this.props;

        return !this.props.isGeolocationAvailable ? (
            <div>Your browser does not support Geolocation</div>
        ) : !this.props.isGeolocationEnabled ? (
            <div>
                <div>Geolocation is not enabled</div>
                <div>please enable location in device's settings</div>
                <div>and allow us use device's location</div>
            </div>
        ) : coords ? (
            <div className='demoGeolocated'>
                <table className="w3-table w3-striped w3-bordered">
                    <tbody>
                        <tr>
                            <td>current latitude:</td>
                            <td >{coords.latitude}</td>
                        </tr>
                        <tr>
                            <td >current longitude:</td>
                            <td >{coords.longitude}</td>
                        </tr>
                    </tbody>
                </table>
                <div style={{height:'100px'}}></div>
                <table className="w3-table w3-striped w3-bordered">
                    <thead>
                        <tr>
                            <td className='locCheck'></td>
                            <td>Location</td>
                            <td >Distance</td>
                            <td >latitude</td>
                            <td >longitude</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            DUBAI_LOCATIONS.map((location) => {
                                return <LocationDistance coords={coords} location={location} />
                            })
                        }

                    </tbody>
                </table>
            </div>
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