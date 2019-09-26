import React, { Component } from 'react'
import Jumbotron from '../../components/Jumbotron/Jumbotron'
import Button from '../../components/Button/Button'
import Header from '../../components/Header/Header'
import Drawer from 'react-motion-drawer'
import GoogleMaps from '../../utils/GoogleMaps/GoogleMaps'
import BackButton from '../../assets/images/ic_webBack@2x.png'
import MapButton from '../../assets/images/icon_map@2x.png'
import axios from 'axios'



export class Restaurants extends Component {

    state = {
        restaurantData: [],
        drawerOpen: false,
        restaurantName: '',
        restaurantCat: '',
        restaurantPhone: '',
        restaurantTwitter: 'twit',
        resturantAddress: '',
        restaurantCity: '',
        restaurantZip: '',
        restaurantState: '',
        restaurantLat: '',
        restaurantLong: '',
        width: ''

    }

    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
      };

    componentDidMount() {
        this.getRestaurantInfo()
        this.deviceUsed()
    }

    deviceUsed() {
        this.setState({
            width: window.innerWidth
        })
        window.addEventListener('resize', this.handleWindowSizeChange)
    }

    getRestaurantInfo() {
        axios.get('http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/restaurants.json')
            .then((res) => this.setState({ restaurantData: res.data.restaurants }, () => {
            }))
            .catch((err) => console.log(err))
    }


    render() {

        const { drawerOpen, width } = this.state
        const isntMobile = width >= 500;

        return (

            <div className="container">
                <div className="row">
                    {this.state.restaurantData.map(restaurant => (
                        <div className="col-sm-6" style={isntMobile ? {padding: '15px 15px', overflow: 'hidden'} : {padding: '0px 0px', overflow: 'hidden'}} key={restaurant.name}>
                            <Jumbotron
                                style={styles.jumbo}
                                backgroundImage={restaurant.backgroundImageURL}
                                // onClick={() => this.viewRestaurant(restaurant)}
                                onClick={() => this.setState({
                                    drawerOpen: !drawerOpen,
                                    restaurantName: restaurant.name,
                                    restaurantCat: restaurant.category,
                                    restaurantPhone: restaurant.contact.formattedPhone,
                                    restaurantTwitter: `@${restaurant.contact.twitter}`,
                                    restaurantAddress: restaurant.location.address,
                                    restaurantCity: restaurant.location.city,
                                    restaurantState: restaurant.location.state,
                                    restaurantZip: restaurant.location.postalCode,
                                    restaurantLat: restaurant.location.lat,
                                    restaurantLong: restaurant.location.lng
                                })}
                            >
                                <h3 style={styles.h3}>{restaurant.name}</h3>
                                <h4 style={styles.h4}>{restaurant.category}</h4>
                            </Jumbotron>
                        </div>
                    ))}
                    <Drawer
                        open={drawerOpen}
                        width='75%'
                        noTouchOpen={false}
                        noTouchClose={false}
                        onChange={open => this.setState({ drawerOpen: open })} >
                        <Jumbotron style={{ minHeight: '100vh', overflow: 'hidden', padding: '0px 0px', margin: '0px auto' }}>
                            <Jumbotron
                                style={styles.header2}
                            >
                                    <Button
                                        alt={'Back'}
                                        src={BackButton}
                                        style={{height: '25px', width: '20px', marginLeft: '2%', paddingBottom: '2px'}}
                                        

                                    />
                                    <p style={{marginLeft: '25%', fontSize: '17px', color: '#FFFFFF', fontFamily: 'AvenirNextBold', margin: '0px auto',}}>Lunch Tyme</p>
                             
                                    <Button
                                        alt={'Map'}
                                        src={MapButton}
                                        style={{height: '35px', width: '35px', marginRight: '2%', paddingBottom: '5px'}}
                                    />
                            </Jumbotron>
                            <Jumbotron className='container' style={styles.map}>
                                    <GoogleMaps
                                    mapStyle={isntMobile ? { width: '98.6%', height: '26%', position: 'relative' } : { width: '93%', height: '22%', position: 'relative' }}
                                    selectedPlace={this.state.restaurantName}
                                    lat={this.state.restaurantLat}
                                    lng={this.state.restaurantLong}
                                />

                            </Jumbotron>
                            <Jumbotron
                                style={styles.header1}
                            >
                                <p style={{ margin: '0px auto', padding: '0px 0px', fontSize: '16px', fontFamily: 'AvenirNextBold', color: '#FFFFFF', marginLeft: '12px' }}>{this.state.restaurantName}</p>
                                <p style={{ margin: '0px auto', padding: '0px 0px', fontSize: '12px', fontFamily: 'AvenirNextRegular', color: '#FFFFFF', marginLeft: '12px' }}>{this.state.restaurantCat}</p>
                            </Jumbotron>
                            <Jumbotron>
                                <h4 style={{ marginTop: '16px', marginLeft: '12px', fontSize: '16px' }}>{this.state.restaurantAddress}</h4>
                                <h4 style={{ marginLeft: '12px', fontSize: '16px' }}>{`${this.state.restaurantCity}, ${this.state.restaurantState} ${this.state.restaurantZip}`}</h4>
                                <h4 style={{ marginTop: '26px', marginLeft: '12px', fontSize: '16px' }}>{this.state.restaurantPhone}</h4>
                                <h4 style={{ marginTop: '26px', marginLeft: '12px', fontSize: '16px' }}>{this.state.restaurantTwitter}</h4>
                            </Jumbotron>
                        </Jumbotron>
                    </Drawer>
                </div>
            </div>
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
        paddingTop: '25px',
        paddingBottom: '10px',
        height: '60px'
    },
    header1: {
        backgroundColor: '#34b379',
        // display: 'flex',
        width: '100%',
        paddingTop: '10px',
        // paddingBottom: '10px',
        height: '60px',
        // display: 'block'
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
    }
}

export default Restaurants