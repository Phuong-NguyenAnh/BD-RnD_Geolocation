import React from "react";

import './LocationDistance.css';
import Utils from "./Utils";

export default class LocationDistance extends React.Component {
    render() {
        const {coords, location} = this.props

        let distance = coords && Utils.distance(coords.longitude, coords.latitude, location.long, location.lat)
        let distanceStr = distance > 1.0 ? `${~~distance} km` : `${~~(distance * 1000)} m`
        return (
            <tr>
                <td className='locCheck'>{
                    <input
                        type="checkbox"
                        disabled={true}
                        checked={distance * 1000 <= 100}
                    />
                }</td>
                <td className='locName'>{location.name}:</td>
                <td className='tdContent'>{distanceStr}</td>
                <td className='tdContent'>{location.lat}</td>
                <td className='tdContent'>{location.long}</td>
            </tr>
        )
    }
}