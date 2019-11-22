import React from "react";
import DemoGeolocated from "./demo_geolocated/DemoGeolocated";
import './Home.css'

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isChecked: false,
        }
    }

    render() {
        const {isChecked} = this.state
        return (
            <div className="App">
                <header className="App-header">
                    {isChecked ?
                        <DemoGeolocated /> :
                        <button
                            className='checkLocButton'
                            onClick={() => this.setState({isChecked: true})}
                        >
                            check location
                    </button>
                    }
                </header>
            </div>
        )
    }
}