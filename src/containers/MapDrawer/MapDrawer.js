import React, { Component } from 'react'
import Jumbotron from '../../components/Jumbotron/Jumbotron'
import GoogleMaps from '../../utils/GoogleMaps/GoogleMaps'
import Button from '../../components/Button/Button'
import BackButton from '../../assets/images/ic_webBack@2x.png'
import MapButton from '../../assets/images/icon_map@2x.png'


export class MapDrawer extends Component {
    render() {
        return(
            <Jumbotron style={{ minHeight: '100vh', overflow: 'hidden', padding: '0px 0px', margin: '0px auto' }}>
            <Jumbotron
                style={styles.header2}
            >
                <Button
                    alt={'Back'}
                    src={BackButton}
                    style={{ height: '25px', width: '20px', marginLeft: '2%', paddingBottom: '2px' }}
                />
                <p style={{ marginLeft: '25%', fontSize: '17px', color: '#FFFFFF', fontFamily: 'AvenirNextBold', margin: '0px auto', }}>Lunch Tyme</p>

                <Button
                    alt={'Map'}
                    src={MapButton}
                    style={{ height: '35px', width: '35px', marginRight: '2%', paddingBottom: '5px' }}
                />
            </Jumbotron>
            <Jumbotron className='container' style={styles.map}>
                <GoogleMaps
                    mapStyle={{ width: '100%', height: '100%', position: 'absolute', top: '0', right: '0', bottom: '0', left: '0' }}
                    selectedPlace={this.props.restaurantName}
                    lat={this.props.restaurantLat}
                    lng={this.props.restaurantLong}
                />

            </Jumbotron>
            <Jumbotron
                style={styles.header1}
            >
                <p style={{ margin: '0px auto', padding: '0px 0px', fontSize: '16px', fontFamily: 'AvenirNextBold', color: '#FFFFFF', marginLeft: '12px' }}>{this.props.restaurantName}</p>
                <p style={{ margin: '0px auto', padding: '0px 0px', fontSize: '12px', fontFamily: 'AvenirNextRegular', color: '#FFFFFF', marginLeft: '12px' }}>{this.props.restaurantCat}</p>
            </Jumbotron>
            <Jumbotron>
                <h4 style={{ marginTop: '16px', marginLeft: '12px', fontSize: '16px' }}>{this.props.restaurantAddress}</h4>
                <h4 style={{ marginLeft: '12px', fontSize: '16px' }}>{`${this.props.restaurantCity}, ${this.props.restaurantState} ${this.props.restaurantZip}`}</h4>
                <h4 style={{ marginTop: '26px', marginLeft: '12px', fontSize: '16px' }}>{this.props.restaurantPhone}</h4>
                <h4 style={{ marginTop: '26px', marginLeft: '12px', fontSize: '16px' }}>{this.props.restaurantTwitter}</h4>
            </Jumbotron>
        </Jumbotron>
        )
    }
}

const styles = {
    h3: {
        position: 'relative',
        top: '140px',
        left: '12px',
        fontSize: '16px',
        fontFamily: 'AvenirNextBold',
        color: '#ffffff'
    },
    h4: {
        position: 'relative',
        top: '130px',
        left: '12px',
        fontSize: '12px',
        fontFamily: 'AvenirNextRegular',
        color: '#ffffff'
    },
    jumbo: {
        margin: '0px auto',
        height: '180px',
        width: '100%',
        backgroundSize: 'cover',
        padding: "0px 0px",
        border: "1px solid",
        boxShadow: '2px 5px #888888',
    },
    header: {
        backgroundColor: '#43E895',
        display: 'flex',
        width: '100%',
        paddingTop: '45px',
        paddingBottom: '10px'
    },
    header1: {
        backgroundColor: '#34b379',
        width: '100%',
        paddingTop: '10px',
        height: '60px',
    },
    header2: {
        backgroundColor: '#43E895',
        display: 'flex',
        width: '100%',
        paddingTop: '25px',
        paddingBottom: '10px',
        height: '60px',
    },
    title: {
        fontSize: '17px',
        color: '#FFFFFF',
        fontFamily: 'AvenirNextBold',
        margin: '0px auto',
        paddingLeft: '4%'

    },
    map: {
        marginBottom: '0px',
        height: '180px',
        position: 'relative'
    }
}

export default MapDrawer