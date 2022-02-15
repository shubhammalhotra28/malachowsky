import React from 'react';
import './ChowMap.css';
import { Wrapper, Status } from "@googlemaps/react-wrapper";

class ChowMap extends React.Component {
    render() {
        return (
            <div class="main">
                <center>
                    <img src={background} alt="tophat_chow" />
                </center>
            </div>
        )
    }
}