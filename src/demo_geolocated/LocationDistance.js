import React from "react";

import './LocationDistance.css';

export default class LocationDistance extends React.Component {
    render() {
        const {name, distance} = this.props
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
                <td className='locName'>{name}:</td>
                <td>{distanceStr}</td>
            </tr>
        )
    }
}