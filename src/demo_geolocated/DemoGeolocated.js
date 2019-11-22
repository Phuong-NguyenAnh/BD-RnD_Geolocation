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
                <table>
                    <tbody>
                        <tr>
                            <td className='locName'>current latitude:</td>
                            <td className='locName'>{coords.latitude}</td>
                        </tr>
                        <tr>
                            <td className='locName'>current longitude:</td>
                            <td className='locName'>{coords.longitude}</td>
                        </tr>
                    </tbody>
                </table>
                <table>
                    <tbody>
                        <tr>
                            <td className='locCheck'></td>
                            <td className='locName'>Location</td>
                            <td className='locName'>Distance</td>
                            <td className='locName'>latitude</td>
                            <td className='locName'>longitude</td>
                        </tr>
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