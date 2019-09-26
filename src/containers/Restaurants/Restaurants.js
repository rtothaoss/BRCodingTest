import React, { Component } from 'react'
import Jumbotron from '../../components/Jumbotron/Jumbotron'
import Header from '../../components/Header/Header'
import Drawer from 'react-motion-drawer'
import GoogleMaps from '../../utils/GoogleMaps/GoogleMaps'
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
        restaurantLong: ''
        
    }

    componentDidMount() {
        this.getRestaurantInfo()
    }

    getRestaurantInfo() {
        axios.get('http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/restaurants.json')
            .then((res) => this.setState({ restaurantData: res.data.restaurants }, () => {
            }))
            .catch((err) => console.log(err))
    }


    render() {

        const { drawerOpen } = this.state

        return (

            <div className="container">
                <div className="row">
                    {this.state.restaurantData.map(restaurant => (
                        <div className="col-sm-6" key={restaurant.name}>
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
                            <Header
                                title={"Lunch Tyme"}
                                style={styles.header}
                                titleStyle={styles.title}
                                className='text-center'
                            >
                            </Header>
                            <Jumbotron style={styles.map}>
                                <GoogleMaps
                                    selectedPlace={this.state.restaurantName}
                                    lat={this.state.restaurantLat}
                                    lng={this.state.restaurantLong}
                                />
                            </Jumbotron>
                            <Jumbotron
                                style={styles.header1}
                            >
                            <p style={{margin: '0px auto', padding: '0px 0px', fontSize: '16px', fontFamily: 'AvenirNextBold', color: '#FFFFFF', marginLeft: '12px'}}>{this.state.restaurantName}</p>
                            <p style={{margin: '0px auto', padding: '0px 0px', fontSize: '12px', fontFamily: 'AvenirNextRegular', color: '#FFFFFF', marginLeft: '12px'}}>{this.state.restaurantCat}</p>
                            </Jumbotron>
                            <Jumbotron>
                                <h4 style={{marginTop: '16px', marginLeft: '12px', fontSize: '16px'}}>{this.state.restaurantAddress}</h4>
                                <h4 style={{marginLeft: '12px', fontSize: '16px'}}>{`${this.state.restaurantCity}, ${this.state.restaurantState} ${this.state.restaurantZip}`}</h4>
                                <h4 style={{marginTop: '26px', marginLeft: '12px', fontSize: '16px'}}>{this.state.restaurantPhone}</h4>
                                <h4 style={{marginTop: '26px', marginLeft: '12px', fontSize: '16px'}}>{this.state.restaurantTwitter}</h4>
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
    title: {
        fontSize: '17px',
        color: '#FFFFFF',
        fontFamily: 'AvenirNextBold',
        margin: '0px auto',
        paddingLeft: '4%'

    },
    map: {
        marginBottom: '0px',
        height: '250px',
        width: '100%'
    }
}

export default Restaurants