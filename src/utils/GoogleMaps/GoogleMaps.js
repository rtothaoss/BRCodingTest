import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const apiKey = 'AIzaSyBzMkoZ4P2DERu8EM_LLRNrpkyMWykT5Hk'

export class MapContainer extends Component {

    render() {

        return (
            <Map
                style={{ width: '98.6%', height: '27%', position: 'relative' }}
                center={{lat: this.props.lat, lng: this.props.lng }}
                google={this.props.google} zoom={16}>

                <Marker
                    onClick={this.onMarkerClick}
                    name={'Current location'}
                    position={{lat: this.props.lat, lng: this.props.lng }} />

                <InfoWindow onClose={this.onInfoWindowClose}>
                    <div>
                        <h1>{this.props.selectedPlace}</h1>
                    </div>
                </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: (apiKey)
})(MapContainer)